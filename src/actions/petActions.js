import {GET_PETS, ADD_PET, DELETE_PET} from './types';
export const getPets = () => {
    return{
        type:GET_PETS
    };
}
export const addPet = (pet) => {
    return{
        type:ADD_PET,
        payload:pet
    }
}
export const deletePet = (id) => {
    return{
        type:DELETE_PET,
        payload:id
    }
}