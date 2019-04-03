import React from 'react';
import { getStarRating} from '../utils/ProductUtils';

const CustomerReview = (props) =>{
    
    let displayDate = new Date(props.customerReview.datePosted).toDateString().split(' ');
    displayDate = `${displayDate[1]} ${displayDate[2]}, ${displayDate[3]}`;

    return(
        <div>
            <div className="starCls"> {getStarRating(props.customerReview.overallRating)} </div>
            <div className="customerReviewTitle">{props.customerReview.title}</div>
            <div className="returnPolicyCls">{props.customerReview.review}</div>
            <div className="returnPolicyCls"><span style={{color: '#0066cc'}}>{props.customerReview.screenName}</span> {displayDate}</div>
        </div>
    )
}
export default CustomerReview;