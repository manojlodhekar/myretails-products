import * as type from '../actions/actionTypes';
import initialState from '../store/initialState'

export default function productReducer(currentState = initialState, action){
    let updatedState = Object.assign({}, currentState)
    switch(action.type){
        case type.SET_PRODUCT_DETAILS :
           updatedState.selectedProductDetail = action.payload
        break;

        case type.SET_PRODUCT_IMAGES :
           updatedState.productDetailImages = action.payload
        break;
        case type.SET_PRODUCT_DESCRIPTION :
           updatedState.productDetailDescription = action.payload
        break;
        case type.SET_PRODUCT_REVIEW :
           updatedState.productDetailCustomerReview = action.payload
        break;
        case type.SET_PRODUCT_OFFERS :
           updatedState.productDetailOffers = action.payload
        break;
        case type.SET_PRODUCT_PROMOTIONS :
           updatedState.productDetailPromotions = action.payload
        break;
        case type.SET_PRODUCT_RETURNPOLICY :
           updatedState.productDetailReturnPolicy = action.payload
        break;

        case type.PRODUCT_API_ERROR :
            updatedState.productApiError = action.payload
        break;
        default:
        return currentState;
    }
    return updatedState
   
}