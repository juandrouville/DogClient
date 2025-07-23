import axios from 'axios';
export const REQUEST_DOGS = 'REQUEST_DOGS';
export const SUCCES_DOGS = 'SUCCES_DOGS';
export const FIND_SUCCES = 'FIND_SUCCES';
export const ERROR_DOGS = 'ERROR_DOGS';
export const RESET_DOGS = 'RESET_DOGS';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREVIUS_PAGE = 'PREVIUS_PAGE';
const BASE_URL_API = 'https://dogapi-u6q5.onrender.com';



export function requestDogs(){
    return {
        type:REQUEST_DOGS,
    };
};

export function succesDogs(response){
    return {
        type:SUCCES_DOGS,
        payload:response,
    };
};

export function findSucces(response){
    return {
        type:FIND_SUCCES,
        payload:response,
    };
};

export function errorDogs(error){
    return{
        type:ERROR_DOGS,
        payload:error,
    };
};

export function resetDogs(){
    return {
        type:RESET_DOGS,
    };
};

export function nextPage(page){
    return {
        type: NEXT_PAGE,
        payload: page,
    };
};

export function prevPage(page){
    return {
        type:PREVIUS_PAGE,
        payload: page,
    }
};

function paginationDogs(arrayDogs){
    const pagination = 12;
    const arrayPagination = [];
    for(let x = 0; x < arrayDogs.length; x += pagination){
        arrayPagination.push(arrayDogs.slice(x, x + pagination))
    };
    return arrayPagination;
}

export function getDogs(){
    return (dispatch) => {
        dispatch(requestDogs());
        axios.get(`${BASE_URL_API}/dogs`)
        .then(response => {
            const dogsInPage = paginationDogs(response.data);
            dispatch(succesDogs(dogsInPage));
        })
        .catch(error => {
                dispatch(errorDogs('Not found request'))
        })
    };
};

export function getNextPage(page){
    return (dispatch) => {
        dispatch(nextPage(page));
    };
};

 export function getPrevPage(page){
     return (dispatch) => {
         dispatch(prevPage(page));
     };
 };

 export function searchDogName(search){
     return (dispatch) => {
         dispatch(requestDogs());
         axios.get(`${BASE_URL_API}/dogs?name=${search}`)
         .then(response => {
            console.log('search dog',response.data);
            dispatch(findSucces(response.data));
            dispatch(resetDogs());
         })
         .catch(error => {
             dispatch(errorDogs('Not found request'))
         });
     };
 };

 export function postDog(dog){
     return (dispatch) => {
         axios.post(`${BASE_URL_API}/dogs`,{...dog})
         .then(response => {
             dispatch(succesDogs(response.data))
         })
         .catch(error => {
             dispatch(errorDogs('Not found request'))
         });
     };
 };
        
 export function getDetailsDog(dogId){
     return (dispatch) => {
         dispatch(requestDogs());
         axios.get(`${BASE_URL_API}/dogs/${dogId}`)
         .then(response => {
            console.log(response.date);
             dispatch(succesDogs(response.data))
         })
         .catch(error => {
             dispatch(errorDogs('Not found request'))
         });
     };
 };

 export function getByTemperaments(temperament){
     return (dispatch) => {
         dispatch(requestDogs());
         axios.get(`${BASE_URL_API}/dogs/temperaments/${temperament}`)
         .then(response => {
             dispatch(succesDogs(response.data[0].dogs))
         })
         .catch(error => {
             dispatch(errorDogs('Not found request'))
         });
     };
 };
    
 export function getCreated(){
     return (dispatch) => {
         dispatch(requestDogs());
         axios.get(`${BASE_URL_API}/dogs/get/created`)
         .then(response => {
             dispatch(succesDogs(response.data))
         })
         .catch(error => {
             dispatch(errorDogs('Not found request'))
         });
     };
 };

 export function getByOrder(order){
     return (dispatch) => {
         dispatch(requestDogs());
         axios.get(`${BASE_URL_API}/dogs?order=${order}`)
         .then(response => {
             dispatch(succesDogs(response.data))
         })
         .catch(error => {
             dispatch(errorDogs('Not found request'))
         });
     };
 };
