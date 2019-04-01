import productReducer from "./productReducer";
import initialState from "../store/initialState";
import * as type from '../actions/actionTypes';

describe('Product Reducer', () =>{
    it('should return the initial state', () => {
        expect(productReducer(undefined, {})).toEqual(initialState);
      });

      it('should handle SET_PRODUCT_DETAILS', () => {
        const productPayload = {
          "CatalogEntryView": [
           {
            "CustomerReview": [
             {
              "Con": [
               {
                "RatableAttributes": [
                 {
                  "description": "easy_to_use",
                  "name": "EASY_TO_USE",
                  "value": "4"
                 },
                 {
                  "description": "quality",
                  "name": "QUALITY",
                  "value": "1"
                 },
                 {
                  "description": "value",
                  "name": "VALUE",
                  "value": "1"
                 }
                ],
                "datePosted": "Mon Mar 11 13:13:55 UTC 2013",
                "overallRating": "1",
                "review": "Less than 2 months after purchase it completely stopped working. First it wouldn't detect the pitcher when trying to blend a significant amount, a couple weeks later it wouldn't detect the single serve cup. ",
                "reviewKey": "b326b0d6-e6ae-4ec5-8080-720f0ad741af",
                "screenName": "New York",
                "title": "Very unhappy"
               }
              ]
            }]}]};

        const setProductDetails = {
          type: type.SET_PRODUCT_DETAILS,
          payload: productPayload
          }
        expect(productReducer({}, setProductDetails)).toEqual({"selectedProductDetail":productPayload});
      });

    

    it('should handle empty SET_PRODUCT_DETAILS', () => {
        const setProductDetails = {
          type: type.SET_PRODUCT_DETAILS
        };
        expect(productReducer({}, setProductDetails)).toEqual({});
      });

    it('should handle SET_PRODUCT_IMAGES', () => {
        const itemPayload = {"Images": [
          {
           "AlternateImages": [
            {
             "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt01"
            },
            {
             "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt02"
            }
           ],
           "PrimaryImage": [
            {
             "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758"
            },
           ]
          }
        ]}

        const setProductImages = {
          type: type.SET_PRODUCT_IMAGES,
          payload: itemPayload
          }
        expect(productReducer({}, setProductImages)).toEqual({"productDetailImages" : itemPayload});
      });

      it('should handle empty SET_PRODUCT_IMAGES', () => {
        const setProductDetails = {
          type: type.SET_PRODUCT_IMAGES
        };
        expect(productReducer({}, setProductDetails)).toEqual({});
      });

      it('should handle SET_PRODUCT_DESCRIPTION', () => {
        const itemPayload = {"ItemDescription": [
          {
           "features": [
            "<strong>Wattage Output:<\/strong> 1100 Watts",
            "<strong>Safety and Security Features:<\/strong> Non-Slip Base",
            "<strong>Care and Cleaning:<\/strong> Easy-To-Clean, Dishwasher Safe Parts"
           ]
          }]
         }

        const setProductDesc = {
          type: type.SET_PRODUCT_DESCRIPTION,
          payload: itemPayload
          }
        expect(productReducer({}, setProductDesc)).toEqual({"productDetailDescription" : itemPayload});
      });

      it('should handle SET_PRODUCT_REVIEW', () => {
        const itemPayload = {"Reviews": [
          {
           "city": "NYC",
           "customerId": "110657105",
           "datePosted": "Mon Mar 11 13:13:55 UTC 2013",
           "helpfulVotes": "39",
           "overallRating": "1",
         }]}

        const setProductReview = {
          type: type.SET_PRODUCT_REVIEW,
          payload: itemPayload
          }
        expect(productReducer({}, setProductReview)).toEqual({"productDetailCustomerReview" : itemPayload});
      });

      it('should handle SET_PRODUCT_OFFERS', () => {
        const itemPayload = {"Offers": [
          {
           "OfferPrice": [
            {
             "currencyCode": "USD",
             "formattedPriceValue": "$139.99",
             "priceQualifier": "Online Price",
             "priceValue": "13999"
            }
           ]
          }
         ]}

        const setProductOfferes = {
          type: type.SET_PRODUCT_OFFERS,
          payload: itemPayload
          }
        expect(productReducer({}, setProductOfferes)).toEqual({"productDetailOffers" : itemPayload});
      });

      it('should handle SET_PRODUCT_PROMOTIONS', () => {
        const itemPayload = {"Promotions": [
          {
           "Description": [
            {
             "legalDisclaimer": "Offer available online only.",
             "shortDescription": "SPEND $50, GET FREE SHIPPING"
            }
           ]}]}

        const setProductPromotion = {
          type: type.SET_PRODUCT_PROMOTIONS,
          payload: itemPayload
          }
        expect(productReducer({}, setProductPromotion)).toEqual({"productDetailPromotions" : itemPayload});
      });

      it('should handle SET_PRODUCT_RETURNPOLICY', () => {
        const itemPayload = {"ReturnPolicy": [
          {
           "ReturnPolicyDetails": [
            {
             "guestMessage": "View our return policy",
             "policyDays": "100",
             "user": "Regular Guest"
            },
            {
             "guestMessage": "View our return policy",
             "policyDays": "120",
             "user": "Best Guest"
            }
           ]}]}

        const setProductReturn = {
          type: type.SET_PRODUCT_RETURNPOLICY,
          payload: itemPayload
          }
        expect(productReducer({}, setProductReturn)).toEqual({"productDetailReturnPolicy" : itemPayload});
      });

      it('should handle PRODUCT_API_ERROR', () => {
        const itemPayload = true
        const setProductApiError = {
          type: type.PRODUCT_API_ERROR,
          payload: itemPayload
          }
        expect(productReducer({}, setProductApiError)).toEqual({"productApiError" : itemPayload});
      });

      
})