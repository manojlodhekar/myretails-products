import * as type from '../actions/actionTypes';
import productConst from '../const/productConst';
import axios from 'axios';

export const getProductDetails = () => (dispatch) =>{
    

  let productApiURL = productConst.PRODUCT_API_URL;  
   
  const setProductDetailsSuccess = (response) => {
      
      dispatch(setProductDetailsImages(response.Images[0]))
      dispatch(setProductDetailsDescription(response.ItemDescription[0]))
      dispatch(setProductDetailsCustomerReview(response.CustomerReview[0]))
      dispatch(setProductDetailsOffers(response.Offers[0]))
      dispatch(setProductDetailsPromotions(response.Promotions))
      dispatch(setProductDetailsReturnPolicy(response.ReturnPolicy[0]))
      dispatch(setProductDetailsItem(response))
  }

   const setProductDetailsItem = (response) => {
    return {
      type: type.SET_PRODUCT_DETAILS,
      payload: response
    }
  }

  const setProductDetailsImages = (response) => {
    return {
      type: type.SET_PRODUCT_IMAGES,
      payload: response
    }
  }
  const setProductDetailsDescription = (response) => {
    return {
      type: type.SET_PRODUCT_DESCRIPTION,
      payload: response
    }
  }
  const setProductDetailsCustomerReview = (response) => {
    return {
      type: type.SET_PRODUCT_REVIEW,
      payload: response
    }
  }
  const setProductDetailsOffers = (response) => {
    return {
      type: type.SET_PRODUCT_OFFERS,
      payload: response
    }
  }
  const setProductDetailsPromotions = (response) => {
    return {
      type: type.SET_PRODUCT_PROMOTIONS,
      payload: response
    }
  }
  const setProductDetailsReturnPolicy = (response) => {
    return {
      type: type.SET_PRODUCT_RETURNPOLICY,
      payload: response
    }
  }

  const setProductDetail = (response) => {
    return {
      type: type.SET_PRODUCT_DETAILS,
      payload: response
    }
  }
 
  
  const getProductItemError = (err) => {
    return {
      type: type.PRODUCT_API_ERROR,
      payload: true
    }
  }


  return axios.get(productApiURL)
    .then((response) => {
      dispatch(setProductDetail(response.data))
      setProductDetailsSuccess(response.data.CatalogEntryView[0]);
    })
    .catch((err) => {
      dispatch(getProductItemError(err))
    })
    
};
export function setApiError(isError){
  return {
    type: type.PRODUCT_API_ERROR,
    payload: false
  }
}