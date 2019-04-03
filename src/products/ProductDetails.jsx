import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image, Item, Icon, Grid, Segment} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { getProductDetails } from '../actions/getProductDetails';
import ProductHeader from './ProductHeader';
import productConst from '../const/productConst';
import ProductPromotions from './ProductPromotions';
import ProductReturnPolicy from './ProductReturnPolicy'
import HTMLRenderer from './HTMLRenderer';
import ProductReview from './ProductReview';
import ProductCarousel from './ProductCarousel';
import ProductsZoomDialog from './ProductsZoomDialog';

class ProductDetails extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            quantity : 1,
            windowWidth:window.innerWidth,
            currentActiveIndex: 0,
            open: false
        }
        this.updateDimensions = this.updateDimensions.bind(this);
        this.buyProduct = this.buyProduct.bind(this);
    };

    componentDidMount(){
        this.props.actions.getProductDetails();
        window.addEventListener("resize", this.updateDimensions);
    }

    buyProduct = (btnStatus) =>{
        alert(` ${this.state.quantity} items added to cart.`);
    }
    updateDimensions() {
        const realContainerWidth = window.innerWidth;
        this.setState({
            windowWidth:realContainerWidth 
        })
      }
    changeQuantity = (operation) => {
        if(operation === 'remove'){
            if(this.state.quantity === 1)
            return;
            this.setState({ quantity: this.state.quantity - 1 })
        }
        else{
            this.setState({ quantity: this.state.quantity + 1})
        }
      }

      setHtmlContent = (content) =>{
          if(!content)return;

          let productDesc = content.map(item => {
            return(`<li>${item}</li>`)
          });

          return productDesc;
      }

      selectRetailsProductImage = (index , url) =>{
        console.log('index = ' + index + " URL" + url);
        this.setState({currentActiveIndex: index})
      }
      openZoomedImage = () =>{
        this.setState({ open: true })
      }
      modalPopupClosed = () =>{
        this.setState({
          open: false
        })
      }
      getCurrentImageUrl = () =>{
          if(this.props.productDetailImages.AlternateImages){
              return this.props.productDetailImages.AlternateImages;
            }
          
      }

    render(){

        const {selectedProductDetail, productDetailImages, productDetailDescription, productDetailCustomerReview, productDetailOffers,
            productDetailPromotions, productDetailReturnPolicy} = this.props;
            
        let productsDesc =  this.setHtmlContent(productDetailDescription.features);
        productsDesc = productsDesc ? `<ul> ${productsDesc.join('')} </ul>` : '';

        if(selectedProductDetail.CatalogEntryView && productDetailImages.PrimaryImage  && !this.imageCounter){
            this.imageCounter = !this.imageCounter;
            productDetailImages.AlternateImages.unshift(productDetailImages.PrimaryImage[0]);
        }
        
        return(
            
                <div className="detailsContainer">
                    <ProductHeader subHeaderText={productConst.PRODUCT_MAIN_PAGE_SUBHEADER} />
                {
                    selectedProductDetail.itemId ?
                    <div>
                        <Item.Group>
                            <Item>
                            <div className="productLeft">
   
                                <div className="productTitle">{selectedProductDetail.title}</div> 
                                <Item.Image size='large' src={productDetailImages.AlternateImages[this.state.currentActiveIndex].image}
                                style={{paddingLeft: '10%'}}/>
                                <div className="viewLargeIcon" onClick={(e) => this.openZoomedImage()}>
                                    <Icon name='zoom' /> View Larger
                                </div>
                                <ProductCarousel productsList={productDetailImages.AlternateImages} currentActiveIndex={this.state.currentActiveIndex} 
                                selectProductImage = {this.selectRetailsProductImage} />
                                {
                                    this.state.windowWidth >= 768 ?
                                    <ProductReview ProductReviewDetail={productDetailCustomerReview} />:
                                    null
                                }
                            
                            </div>
                        <Item.Content className='productContent'>
                        <Item.Meta className='productPrice'>{productDetailOffers.OfferPrice[0].formattedPriceValue} <span className="offerPriceTxt"> {productDetailOffers.OfferPrice[0].priceQualifier}</span> </Item.Meta>
                            <ProductPromotions promotionDetails={productDetailPromotions} />
                            <div className="quantityCls">
                                <span>Quantity: </span>  <span className="quantityIconCls"> <Icon name="minus circle" onClick={(e) => this.changeQuantity('remove')}/> <span className="category">{this.state.quantity} </span> <Icon name="plus circle" onClick={(e) =>this.changeQuantity('add')}/> </span>
                            </div>
                                {
                                (selectedProductDetail.inventoryStatus === 'Online' && (selectedProductDetail.purchasingChannelCode === '0' || selectedProductDetail.purchasingChannelCode === '2')) ?
                                    <Image src={productConst.ADD_TO_CART} className="buttonCls" onClick={ (e) => this.buyProduct(productConst.CART_BTN_LABEL)} /> 
                                    :
                                    <div>
                                        <Image src={productConst.PICK_IN_STORE} className="buttonCls" onClick={(e) => this.buyProduct(productConst.PICK_BTN_LABEL)} />
                                        <span style={{padding: 50}}>{productConst.FIND_STORE} </span>
                                    </div>
                                }

                            <ProductReturnPolicy returnPolicyDetails={productDetailReturnPolicy} />
                            <div style={{width: '100%', paddingLeft: 25, paddingBottom: 15}}>

                            <Grid columns={3}>
                                <Grid.Row>
                                <Grid.Column className="segCol">
                                     <Segment className="segmentItem" onClick={()=>alert(`Click to action for "${productConst.ADD_TO_REG}"`)}>{productConst.ADD_TO_REG}</Segment>
                                </Grid.Column>
                                <Grid.Column className="segCol">
                                     <Segment className="segmentItem" onClick={()=>alert(`Click to action for "${productConst.ADD_TO_LIST}"`)}>{productConst.ADD_TO_LIST}</Segment>
                                </Grid.Column>
                                <Grid.Column className="segCol">
                                     <Segment className="segmentItem" onClick={()=>alert(`Click to action for "${productConst.SHARE}"`)}>{productConst.SHARE}</Segment>
                                </Grid.Column>
                                </Grid.Row>
                            </Grid>

                            </div>
                            <div>
                                <span className="productTitle">{productConst.PRODUCT_HIGHLIGHT}</span>
                                    <HTMLRenderer htmlContents={productsDesc} />
                            </div>
                            {
                            this.state.windowWidth < 768 ?
                            <ProductReview ProductReviewDetail={productDetailCustomerReview} />:
                            null
                            }

                            
                            </Item.Content>
                        </Item>
                    </Item.Group>
                    <ProductsZoomDialog openPopup={this.state.open}
        imageURLs={this.getCurrentImageUrl()}
        popupClosed = {this.modalPopupClosed}
        currentImgIndex={this.state.currentActiveIndex}/>
                    </div>
                    :
                    <div> Loading....</div>
                }
                
        </div>
        );
    };
}

ProductDetails.propTypes = {
    selectedProductDetail: PropTypes.object.isRequired,
    productDetailImages: PropTypes.object.isRequired,
    productDetailDescription: PropTypes.object.isRequired,
    productDetailCustomerReview: PropTypes.object.isRequired,
    productDetailOffers: PropTypes.object.isRequired,
    productDetailPromotions: PropTypes.array.isRequired,
    productDetailReturnPolicy: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}
function mapStateToProps(state){
    return{
        selectedProductDetail: state.products.selectedProductDetail,
        productDetailImages: state.products.productDetailImages,
        productDetailDescription: state.products.productDetailDescription,
        productDetailCustomerReview: state.products.productDetailCustomerReview,
        productDetailOffers: state.products.productDetailOffers,
        productDetailPromotions: state.products.productDetailPromotions,
        productDetailReturnPolicy: state.products.productDetailReturnPolicy
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators( { getProductDetails }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
