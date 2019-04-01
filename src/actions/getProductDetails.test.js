import * as type from '../actions/actionTypes';
import * as actions from '../actions/getProductDetails';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getProductDetails actions', () => {

  const getItemDetailsMock = {
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
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates SET_PRODUCT_DETAILS after successfuly fetching items', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getItemDetailsMock,
      });
    });

    const expectedActions = [
      { type: type.SET_PRODUCT_DETAILS, payload: getItemDetailsMock },
    ];

    const store = mockStore({ response: {} })

    return store.dispatch(actions.getProductDetails()).then(() => {
      // return of async actions
      expect([store.getActions()[0]]).toEqual(expectedActions);
    });
  });
});