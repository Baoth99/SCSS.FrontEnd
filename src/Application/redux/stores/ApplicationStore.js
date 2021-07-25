import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import FetchDataSaga from '../../../Infrastucture/sagas/FetchDataSaga';
import UserSaga from '../../../Infrastucture/sagas/UserSaga';
import SCSaga from '../../../Infrastucture/sagas/SCSaga';
import UnitSaga from '../../../Infrastucture/sagas/UnitSaga';
import TransactionSaga from '../../../Infrastucture/sagas/TransactionSaga';
import BookingSaga from '../../../Infrastucture/sagas/BookingSaga';
import FeedbackSaga from '../../../Infrastucture/sagas/FeedbackSaga';
import reducers from '../reducers';
import { routerMiddleware } from 'connected-react-router'
import History from '../../../Infrastucture/routes/History';

const UserSagaMiddleware = createSagaMiddleware();
const TransactionSagaMiddleware = createSagaMiddleware();
const SCSagaMiddleware = createSagaMiddleware();
const UnitSagaMiddleware = createSagaMiddleware();
const BookingSagaMiddleware = createSagaMiddleware();
const FeedbackSagaMiddleware = createSagaMiddleware();
const fetchDataSagaMiddleware = createSagaMiddleware();
const routerMiddelware = routerMiddleware(History);


const middleware = [routerMiddelware, 
                    UserSagaMiddleware,
                    SCSagaMiddleware, 
                    TransactionSagaMiddleware,
                    UnitSagaMiddleware,
                    BookingSagaMiddleware,
                    FeedbackSagaMiddleware,
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
BookingSagaMiddleware.run(BookingSaga);
FeedbackSagaMiddleware.run(FeedbackSaga);
fetchDataSagaMiddleware.run(FetchDataSaga);
TransactionSagaMiddleware.run(TransactionSaga);

export default Store;