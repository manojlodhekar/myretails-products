import React from 'react';
import ReactDOM from 'react-dom';
import CustomerReview from './CustomerReview';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';

jest.mock('react-dom');

Enzyme.configure({ adapter: new Adapter() });
let customerReview;
const custReview = {
  "datePosted": "Mon Mar 11 13:13:55 UTC 2013",
  "overallRating": "1",
  "review": "Less than 2 months after purchase it completely stopped working. First it wouldn't detect the pitcher when trying to blend a significant amount, a couple weeks later it wouldn't detect the single serve cup. ",
  "reviewKey": "b326b0d6-e6ae-4ec5-8080-720f0ad741af",
  "screenName": "New York",
  "title": "Very unhappy"
 };

beforeEach(()=>{
  customerReview = mount(<CustomerReview customerReview={custReview}>
  </CustomerReview>);

})
describe('CustomerReview is defined', () => {

  it('should render correctly', () => {
    expect(customerReview).toHaveLength(1);
  });

  it('should render inner component', () => {
    expect(customerReview).toMatchSnapshot();
  });

  it('should render title of component', () => {
    customerReview = shallow(<CustomerReview customerReview={custReview}/>);
    expect(customerReview.find('div')).toHaveLength(5);
    expect(customerReview.find('.customerReviewTitle')).toHaveLength(1);
    expect(customerReview.find('.customerReviewTitle').text()).toEqual(custReview.title);
  });

  it('should render Review of component', () => {
    customerReview = shallow(<CustomerReview customerReview={custReview}/>);
     expect(customerReview.find('.returnPolicyCls')).toHaveLength(2);
    expect(customerReview.find('.returnPolicyCls').first().text()).toEqual(custReview.review);
  });

  it('should render datePosted of component', () => {
    customerReview = shallow(<CustomerReview customerReview={custReview}/>);
     expect(customerReview.find('.returnPolicyCls')).toHaveLength(2);
    expect(customerReview.find('.returnPolicyCls').last().text()).toEqual('New York Mar 11, 2013');
  });
  
 });
