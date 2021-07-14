import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import FetchDataSaga from '../../sagas/FetchDataSaga';
import UserSaga from '../../sagas/UserSaga';
import SCSaga from '../../sagas/SCSaga';
import UnitSaga from '../../sagas/UnitSaga';
import TransactionSaga from '../../sagas/TransactionSaga';
import reducers from '../reducers';
import { routerMiddleware } from 'connected-react-router'
import History from '../../routes/History';

const UserSagaMiddleware = createSagaMiddleware();
const TransactionSagaMiddleware = createSagaMiddleware();
const SCSagaMiddleware = createSagaMiddleware();
const UnitSagaMiddleware = createSagaMiddleware();
const fetchDataSagaMiddleware = createSagaMiddleware();
const routerMiddelware = routerMiddleware(History);


const middleware = [routerMiddelware, 
                    UserSagaMiddleware,
                    SCSagaMiddleware, 
                    TransactionSagaMiddleware,
                    UnitSagaMiddleware,
                    fetchDataSagaMiddleware
                    ];


const Store = createStore(
    reducers(History),
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
)

UserSagaMiddleware.run(UserSaga);
SCSagaMiddleware.run(SCSaga);
UnitSagaMiddleware.run(UnitSaga);
fetchDataSagaMiddleware.run(FetchDataSaga);
TransactionSagaMiddleware.run(TransactionSaga);

export default Store;