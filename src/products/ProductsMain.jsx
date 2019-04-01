import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import productConst from '../const/productConst';
import { connect } from 'react-redux';
import {setApiError} from '../actions/getProductDetails';
import { bindActionCreators } from 'redux';
import ProductDetails from './ProductDetails';

/** This is a description of the foo function. */
class ProductsMain extends Component {
/**
 * Represents a book.
 * @constructor
 */
    constructor(props){
        super(props);
        this.state = {
            open : false
        }
    };


 /**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
    handleRequestClose = () => {
        this.props.actions.setApiError(false)
      };
    render(){
        const {productApiError} = this.props;
        return(
           <div>
               <ProductDetails />
               <Snackbar
                    className="snakeBarCls"
                    open={productApiError}
                    message={productConst.ERROR_MESSAGE}
                    action="undo"
                    autoHideDuration={3000}
                    onClose={this.handleRequestClose}
                />
            </div>
        );
    };
}

function mapStateToProps(state){
    return{
        productApiError: state.products.productApiError
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators( { setApiError }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsMain);