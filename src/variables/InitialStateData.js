import {PAGING} from '../utils/constants/CommonConstants';


export const initialDataSCTable = {

}

export const initialUnitSearchFormState = {
    name: "",
    page : 1, 
    pageSize: PAGING
}

export const initialUserFormState = {
    phone: "",
    name: "",
    email: "",
    address: "",
    idCard: "",
    gender: 0,
    role: 0,
    status: 0,
    page : 1, 
    pageSize: PAGING
};

export const initialSCCreateFormState = {
    name: "",
    unit: '',
    image: null,
    description: ""
}

export const initialSCSearchFormState = {
    name: "",
    unit: "",
    description: "",
    page : 1, 
    pageSize: PAGING
}