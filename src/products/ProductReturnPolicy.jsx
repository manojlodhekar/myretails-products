import React from 'react';
import HTMLRenderer from './HTMLRenderer';

const ProductReturnPolicy = (props) =>{

    const renderProductReturnPolicy = () =>{

        let returnPolicy =  props.returnPolicyDetails.ReturnPolicyDetails.map((policy, index) => {
            return(
                <div className="returnPolicyCls" key={index}> 
                    { 
                        index === 0 ? <div className="policyHeader">{policy.guestMessage} : </div>  : null
                    }
                    
                    <div>
                    {policy.user} : {policy.policyDays} Days
                    </div>
                </div>
            )
        });
        return returnPolicy;
    }

    return(
        <div>
            {renderProductReturnPolicy()}
            <div style={{paddingTop: 10}}>
                <HTMLRenderer htmlContents={props.returnPolicyDetails.legalCopy} />
            </div>
        </div>
    )
}
export default ProductReturnPolicy;