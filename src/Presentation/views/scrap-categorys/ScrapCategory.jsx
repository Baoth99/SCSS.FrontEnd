import React, {useEffect} from 'react';


import {FetchUnit} from '../../../Application/redux/actions/FetchDataAction';
import {useDispatch} from 'react-redux';

import SCCreateForm from '../../components/ScrapCategories/SCCreateForm';

import SrapCategoryDashboard from './SrapCategoryDashboard';
import {Switch, useLocation} from 'react-router-dom';
import {GetSCRoutes} from '../../../Infrastucture/routes/SystemRoutes';

//core components
import ScreenHeader from "../../components/Headers/ScreenHeader";


const ScrapCategory = () => {
    const location = useLocation();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            FetchUnit()
        );
    }, []);

    return (
        <>
            <ScreenHeader/>
            {/* Page content */}
            {location.pathname === "/admin/scrap-category" ? (<SrapCategoryDashboard/>) : null}
                <Switch>
                    {GetSCRoutes()}
                </Switch>
            <SCCreateForm/>
        </>
    );
}

export default ScrapCategory;
