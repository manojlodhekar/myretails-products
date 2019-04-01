import React from 'react';
import ReactDOM from 'react-dom';
import ProductCarousel from './ProductCarousel';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import HTMLRenderer from './HTMLRenderer';

jest.mock('react-dom');

Enzyme.configure({ adapter: new Adapter() });
let productCarousel;
const productDetailImages = {"Images": [
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

beforeEach(()=>{
  productCarousel = mount(<ProductCarousel productsList={productDetailImages.AlternateImages} currentActiveIndex={0}>
  </ProductCarousel>);

})
describe('ProductCarousel is defined', () => {

  it('should render correctly', () => {
    expect(productCarousel).toHaveLength(1);
  });

  it('should render inner component', () => {
    expect(productCarousel).toMatchSnapshot();
  });

  it('should render curent Index of images of component', () => {
    productCarousel = shallow(<ProductCarousel productsList={productDetailImages.Images[0].AlternateImages} currentActiveIndex={0} />);
    expect(productCarousel.props('currentActiveIndex').className).toEqual('sliderBkg');
  });
  it('should render images of component', () => {
    productCarousel = shallow(<ProductCarousel productsList={productDetailImages.Images[0].AlternateImages} currentActiveIndex={0} />);
    expect(productCarousel.find('img')).toHaveLength(2);
  });

 });
