import React from 'react';
import ReactDOM from 'react-dom';
import ProductPromotions from './ProductPromotions';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import HTMLRenderer from './HTMLRenderer';

jest.mock('react-dom');

Enzyme.configure({ adapter: new Adapter() });
let productPromotions;
const itemPayload =  {"Promotions": [
  {
   "Description": [
    {
     "legalDisclaimer": "Offer available online only. Offer applies to purchases of $50 or more of eligible items across all categories. Look for the &quot;SPEND $50: SHIPS FREE&quot; logo on eligible items. Some exclusions apply. Items that are not eligible are subject to shipping charges. $50 purchase is based on eligible merchandise subtotal. Items that are not eligible, GiftCards, e-GiftCards, gift wrap, tax and shipping and handling charges will not be included in determining merchandise subtotal. Offer valid for orders shipping within the 48 contiguous states, as well as APO\/FPO and for Standard and To the Door shipping methods only. Not valid on previous orders.",
     "shortDescription": "SPEND $50, GET FREE SHIPPING"
    }
   ],
   "endDate": "2014-05-25 06:59:00.001",
   "promotionIdentifier": "10736506",
   "promotionType": "Buy catalog entries from category X, get shipping at a fixed price",
   "startDate": "2014-05-18 07:00:00.001"
  }]};
beforeEach(()=>{
  productPromotions = mount(<ProductPromotions promotionDetails={itemPayload}>
  </ProductPromotions>);

})
describe('ProductPromotions is defined', () => {

  it('should render correctly', () => {
    expect(productPromotions).toHaveLength(1);
  });

  it('should render inner component', () => {
    expect(productPromotions).toMatchSnapshot();
  });

  it('should render curent productPromotions of component', () => {
    productPromotions = shallow(<ProductPromotions promotionDetails={itemPayload.Promotions} />);
    expect(productPromotions.find('.promotions').first().text()).toEqual('<Icon />SPEND $50, GET FREE SHIPPING');
  });
  it('should render dscription product Promotions of component', () => {
    productPromotions = shallow(<ProductPromotions promotionDetails={itemPayload.Promotions} />);
    expect(productPromotions.find('.promotions')).toHaveLength(1);
  });


 });
