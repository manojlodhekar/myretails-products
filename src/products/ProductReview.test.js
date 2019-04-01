import React from 'react';
import ReactDOM from 'react-dom';
import ProductReview from './ProductReview';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import initialState from '../store/initialState'
import CustomerReview from './CustomerReview';
import productConst from '../const/productConst';

jest.mock('react-dom');

Enzyme.configure({ adapter: new Adapter() });
let productReview;
const mockStore = configureStore();
const store = mockStore(initialState);
const reviewDetails = { "CustomerReview": [
  {
   "Con": [
    {
     "datePosted": "Mon Mar 11 13:13:55 UTC 2013",
     "title": "Very unhappy"
    }
   ],
   "Pro": [
    {
     "datePosted": "Thu Apr 18 19:42:19 UTC 2013",
     "title": "Fantastic Blender"
    }
   ],
   "Reviews": [
    {
     "city": "NYC",
     "totalVotes": "52"
    }]
  }]};

beforeEach(()=>{
  productReview = mount(<ProductReview ProductReviewDetail={reviewDetails}>
                                  <CustomerReview customerReview={reviewDetails.CustomerReview[0]} />
                        </ProductReview>
);

})
describe('ProductReview is defined', () => {

  it('should render correctly', () => {
    expect(productReview).toHaveLength(1);
  });

  it('should render view all review component', () => {
    productReview = shallow(<ProductReview ProductReviewDetail={reviewDetails.CustomerReview[0]} />);
    expect(productReview.find('.viewReviewCls').first().text()).toEqual(' View all 1 Reviews ');
  });
  it('should render curent PRO of component', () => {
    productReview = shallow(<ProductReview ProductReviewDetail={reviewDetails.CustomerReview[0]} />);
    expect(productReview.find('.reviewTitleCls').first().text()).toEqual('PRO');
  });
  it('should render curent CON of component', () => {
    productReview = shallow(<ProductReview ProductReviewDetail={reviewDetails.CustomerReview[0]} />);
    expect(productReview.find('.reviewTitleCls').last().text()).toEqual('CON');
  });

  it('should render curent PRO_HELPFUL of component', () => {
    productReview = shallow(<ProductReview ProductReviewDetail={reviewDetails.CustomerReview[0]} />);
    expect(productReview.find('.reviewTextCls').first().text()).toEqual(productConst.PRO_HELPFUL);
  });
  it('should render curent CON_HELPFUL of component', () => {
    productReview = shallow(<ProductReview ProductReviewDetail={reviewDetails.CustomerReview[0]} />);
    expect(productReview.find('.reviewTextCls').last().text()).toEqual(productConst.CON_HELPFUL);
  });
  it('should render inner component', () => {
    expect(productReview).toMatchSnapshot();
  });

 });
