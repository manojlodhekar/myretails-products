import React from 'react';

const HTMLRenderer = (props) =>{
    return(
        <div>
            <div style={{paddingTop: 10}}>
                <span id="htmlRendererId" className="returnPolicyCls" dangerouslySetInnerHTML={{__html: props.htmlContents}} />
            </div>
        </div>
    )
}
export default HTMLRenderer;