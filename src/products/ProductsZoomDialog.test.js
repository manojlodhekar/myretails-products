import React from 'react';
import ReactDOM from 'react-dom';
import ProductsZoomDialog from './ProductsZoomDialog';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';

jest.mock('react-dom');

Enzyme.configure({ adapter: new Adapter() });
let productZoom;
const mockGetCurrentImageUrlfn = jest.fn();
const mockModalPopupClosedFn = jest.fn();


beforeEach(()=>{
  productZoom = mount(<ProductsZoomDialog openPopup={true}
    imageURLs={mockGetCurrentImageUrlfn}
    popupClosed = {mockModalPopupClosedFn}
    currentImgIndex={0}>
    </ProductsZoomDialog>);

})
describe('ProductsZoomDialog is defined', () => {

  it('should render correctly', () => {
    expect(productZoom).toHaveLength(1);
  });

  it('should render inner component', () => {
    expect(productZoom).toMatchSnapshot();
  });

  it('should render curent Index of images of component', () => {
    productZoom = shallow(<ProductsZoomDialog openPopup={true} imageURLs={mockGetCurrentImageUrlfn}
    popupClosed = {mockModalPopupClosedFn}
    currentImgIndex={3} />);
    expect(productZoom.props('currentImgIndex').currentImgIndex).toEqual(3);
  });
  it('should render images of component', () => {
    productZoom = shallow(<ProductsZoomDialog openPopup={true} imageURLs={mockGetCurrentImageUrlfn}
    popupClosed = {mockModalPopupClosedFn}
    currentImgIndex={0} />);

    expect(productZoom.find('img')).toBeDefined();
  });

 });
