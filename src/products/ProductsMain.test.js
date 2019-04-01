import React from 'react';
import ProductsMain from './ProductsMain';
import configureStore from 'redux-mock-store';
import ProductDetails from './ProductDetails';
import Snackbar from '@material-ui/core/Snackbar';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import initialState from '../store/initialState'

jest.mock('react-dom');

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
const store = mockStore(initialState);
const productsMain = mount(
    <ProductsMain store={store}>
      <ProductDetails />
      <Snackbar />
    </ProductsMain>
);

describe('ProductsMain is defined', () => {

  it('should be defined', () => {
    expect(productsMain).toBeDefined();
  });
  it('should render correctly', () => {
    expect(productsMain).toHaveLength(1);
  });

  it('should render inner component', () => {
    expect(productsMain).toMatchSnapshot();
  });

  it('should set default open state component', () => {
    const productsMain = shallow(
      <ProductsMain store={store} />
  );
  productsMain.setState({open: true});
    let openState = productsMain.state().open
    expect(openState).toEqual(true);
  });

 });
