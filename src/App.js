import React, { Component } from 'react';
import './App.css';
import './semantic/dist/semantic.min.css';
import './products/ProductStyle.css';
import ProductHeader from './products/ProductHeader';
import productConst from './const/productConst';
import { Container, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: '100%',
    textAlign: 'center'
  },
}
class App extends Component {
  render() {
    return (
      <div>
        <div> 
          <Container textAlign='center' style={styles.container}>
            <ProductHeader subHeaderText={productConst.START_INST} />
            <Image centered size='medium' src={productConst.TARGET_BIG_LOGO} />
            <div className="headerInfo">{productConst.MY_RETAILS_INFO}</div>
            <Link to={"/products"} ><Button size='medium'> Go To Products</Button></Link>
          </Container>
          </div>
      </div>
    );
  }
}
export default App;
