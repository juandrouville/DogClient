import {
    REQUEST_DOGS,
    SUCCES_DOGS,
    FIND_SUCCES,
    ERROR_DOGS,
    RESET_DOGS,
    NEXT_PAGE,
    PREVIUS_PAGE,
} from '../actions/dogs';

export const initialState = {
    loading:false,
    dogs:[],
    error:'',
    page:0,
    finded:[],
};

function dogs (state = initialState,action){
    switch(action.type){
        case REQUEST_DOGS : {
            return {
                ...state,
                loading:true,
            };
        };
        case SUCCES_DOGS : {
            return {
                ...state,
                loading:false,
                dogs:action.payload,
                error:'',
            };
        };
        case FIND_SUCCES : {
            return {
                ...state,
                loading:false,
                finded:action.payload,
            };
        };
        case ERROR_DOGS : {
            return{
                ...state,
                loading:false,
                dogs:[],
                error:action.payload,
            };
        };
        case RESET_DOGS : {
            return {
                ...state,
                loading:false,
                dogs:[],
                error:""
            };
        };
        case NEXT_PAGE : {
            return {
                ...state,
                page:action.payload,
            }
        };
        case PREVIUS_PAGE : {
            return {
                ...state,
                page:action.payload,
            }
        }

        
        default: return state;
    };
};

export default dogs;