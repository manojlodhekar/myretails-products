import React from 'react';
import configureStore from 'redux-mock-store';
import ProductDetails from './ProductDetails';
import ProductHeader from './ProductHeader';
import ProductPromotions from './ProductPromotions';
import ProductReturnPolicy from './ProductReturnPolicy';
import HTMLRenderer from './HTMLRenderer';
import ProductReview from './ProductReview';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import initialState from '../store/initialState'

jest.mock('react-dom');

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
const store = mockStore(initialState);
const obj = {a: "test1", b: "test2"}
let productDetails = mount(
    <ProductDetails store={store}>
       <ProductHeader />
       <ProductPromotions promotionDetails={obj} />
       <ProductReturnPolicy returnPolicyDetails={obj} />
       <HTMLRenderer htmlContents={obj} />
       <ProductReview ProductReviewDetail={obj} />

    </ProductDetails>
);

describe('ProductDetails is defined', () => {

  it('should be defined', () => {
    expect(productDetails).toBeDefined();
  });
  it('should render correctly', () => {
    expect(productDetails).toHaveLength(1);
  });

  it('should render the productHeader component', () => {
    const productHeader = productDetails.find(ProductHeader);
    expect(productDetails.find(productHeader)).toBeDefined();
  });
  it('should render the ProductPromotions component', () => {
    const productPromotions = productDetails.find(ProductPromotions);
    expect(productDetails.find(productPromotions)).toBeDefined();
  });
  it('should render the ProductReturnPolicy component', () => {
    const productReturnPolicy = productDetails.find(ProductReturnPolicy);
    expect(productDetails.find(productReturnPolicy)).toBeDefined();
  });
  it('should render the HTMLRenderer component', () => {
    const hTMLRenderer = productDetails.find(HTMLRenderer);
    expect(productDetails.find(hTMLRenderer)).toBeDefined();
  });
  it('should render the ProductReview component', () => {
    const productReview = productDetails.find(ProductReview);
    expect(productDetails.find(productReview)).toBeDefined();
  });

  it('should render inner component', () => {
    expect(productDetails).toMatchSnapshot();
  });

 });
