import React from 'react';
import ReactDOM from 'react-dom';
import ProductReturnPolicy from './ProductReturnPolicy';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import HTMLRenderer from './HTMLRenderer';

jest.mock('react-dom');

Enzyme.configure({ adapter: new Adapter() });
let prodReturn;
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
beforeEach(()=>{
  prodReturn = mount(<ProductReturnPolicy returnPolicyDetails={itemPayload}>
  <HTMLRenderer  htmlContents="abcd"/>
  </ProductReturnPolicy>);

})
describe('ProductReturnPolicy is defined', () => {

  it('should render correctly', () => {
    expect(prodReturn).toHaveLength(1);
  });

  it('should render inner component', () => {
    expect(prodReturn).toMatchSnapshot();
  });

  it('should render curent policy props of component', () => {
    prodReturn = shallow(<ProductReturnPolicy returnPolicyDetails={itemPayload.ReturnPolicy[0]}/>);// Best Guest : 120 Days
    expect(prodReturn.find('.returnPolicyCls').last().text()).toEqual(itemPayload.ReturnPolicy[0].ReturnPolicyDetails[1].user + ' : ' +  itemPayload.ReturnPolicy[0].ReturnPolicyDetails[1].policyDays + ' Days');
  });
  it('should render retunr policy of component', () => {
    prodReturn = shallow(<ProductReturnPolicy returnPolicyDetails={itemPayload.ReturnPolicy[0]}/>);
    //console.log(itemPayload.ReturnPolicy[0].ReturnPolicyDetails[0].guestMessage);
     expect((prodReturn.find('.policyHeader')).text()).toEqual(itemPayload.ReturnPolicy[0].ReturnPolicyDetails[0].guestMessage + ' : ');
  });



 });
