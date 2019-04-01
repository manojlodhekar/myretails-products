import React from 'react';
import { Icon, Divider } from 'semantic-ui-react';

const ProductPromotions = (props) =>{

    const renderPromotionDetails = () =>{

        let productDetail =  props.promotionDetails.map((item) => {
            return(
                <div className="promotions" key={item.promotionIdentifier}>
                    <div>
                        <Icon name='tag'/>{item.Description[0].shortDescription} 
                    </div>
                </div>
            )
        });
        return productDetail;
    }

    return(
        <div>
            <Divider />
            {renderPromotionDetails()}
            <Divider />
        </div>
    )
}
export default ProductPromotions;