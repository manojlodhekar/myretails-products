import React from 'react';
import ReactDOM from 'react-dom';
import HTMLRenderer from './HTMLRenderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';

jest.mock('react-dom');

Enzyme.configure({ adapter: new Adapter() });
let htmlRenderer;
const htmlContent = "<a href=\"http:\/\/www.target.com\/HelpContent?help=\/sites\/html\/TargetOnline\/help\/returns_and_refunds\/returns_and_refunds.html\">Target return policy<\/a> for complete information.<\/p><br\/>";

beforeEach(()=>{
  htmlRenderer = mount(<HTMLRenderer htmlContents={htmlContent}>
  </HTMLRenderer>);

})
describe('HTMLRenderer is defined', () => {

  it('should render correctly', () => {
    expect(htmlRenderer).toHaveLength(1);
  });

  it('should render inner component', () => {
    expect(htmlRenderer).toMatchSnapshot();
  });
  it('should render html of component', () => {
    htmlRenderer = shallow(<HTMLRenderer  htmlContents={htmlContent} />);
    expect(htmlRenderer.find('.returnPolicyCls')).toHaveLength(1);
    //expect(htmlRenderer.find('#htmlRendererId').text()).toEqual(htmlContent);
  });
 });
