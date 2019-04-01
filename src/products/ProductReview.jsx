import React, { Component } from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import CustomerReview from './CustomerReview';
import { getStarRating} from '../utils/ProductUtils';
import productConst from '../const/productConst';


class ProductReview extends Component {

    constructor(props){
        super(props);
        this.state = {
            showReviewFlag: false
        }
    }
    showHideReview = () =>{
        this.setState({
            showReviewFlag : !this.state.showReviewFlag
        })
    }
    render(){
        
        const {ProductReviewDetail} = this.props;
        return(
            <div >
                <div>
                    <span className="ratingTxtCls"> 
                        <span className="starCls"> {getStarRating(5)} </span> 
                        <span>Overall</span>  
                        <span className="viewReviewCls"
                        onClick={(e) =>this.showHideReview()}> View all {ProductReviewDetail.Reviews.length} Reviews </span> 
                    </span>
                </div>
                <div>
                    <Grid divided='vertically' className="reviewContainer">
                        
                        <Grid.Row columns={2}>
                        <Grid.Column>
                            <div>
                                <div className="reviewTitleCls">PRO</div>
                                <div className="reviewTextCls">{productConst.PRO_HELPFUL}</div>
                                <Divider style={{width:'125%'}}/>
                                <CustomerReview customerReview={ProductReviewDetail.Pro[0]} />
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div>
                            <div className="reviewTitleCls">CON</div>
                                <div className="reviewTextCls">{productConst.CON_HELPFUL}</div>
                                <Divider style={{width:'110%'}}/>
                            <CustomerReview customerReview={ProductReviewDetail.Con[0]} />
                            </div>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                        {
                            this.state.showReviewFlag ?
                            <Grid divided='vertically' className="reviewContainer">
                            <Grid.Row columns={1}>
                            <Grid.Column>
                                <div>
                                    <div className="reviewTitleCls">
                                        All other Reviews
                                        <span className="viewReviewCls"
                                         onClick={(e) => this.showHideReview()}> Hide Review </span>
                                    </div>
                                    <Divider style={{width:'100%'}}/>
                                    {
                                        ProductReviewDetail.Reviews.map((review,index) =>{
                                            return (
                                            <div key={index}>
                                                <CustomerReview customerReview={review} />
                                                <Divider style={{width:'100%'}}/>
                                            </div>
                                            )
                                        })
                                    }
                                    <span className="viewReviewCls"
                                         onClick={(e) => this.showHideReview()}> Hide Review </span>
                                </div>
                            </Grid.Column>
                            </Grid.Row> 
                        </Grid>
                            : null
                        }
                        
                </div>
            </div>
        )
    };
}
export default ProductReview;