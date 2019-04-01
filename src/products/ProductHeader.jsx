import React from 'react';
import { Image, } from 'semantic-ui-react'
import productConst from '../const/productConst';

const styles = {
  
    header:{
        paddingLeft: 10,
        textAlign: 'left',
        paddingBottom: 10,
        borderBottom: '1px solid grey'
    },
    headerTxt:{
        paddingLeft: 10,
        textAlign: 'left',
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 1.2,
        color: 'white'
    },
    logoCls:{
        maxWidth: 55, 
        float: 'right', 
        textAlign: 'right'
    },
    subHeaderText:{
        paddingLeft: 10,
        textAlign: 'left',
        fontSize: 18,
        color: 'white'
    },
    headMessage:{
        width: '100%'
    },
    cartIcon:{
        backgroundColor: '#fff',
       //margin: '2px 8px 2px 5px'
    },
    cart:{
        
    }

}


const ProductHeader = (props) =>{

    return(
        <div className="headContainer" style={{display: 'flex'}}>
            <div>
                <Image src={productConst.TARGET_LOGO} style={styles.logoCls} />
            </div>
            <div style={styles.headMessage}>
                <div style={styles.headerTxt}>
                        {productConst.HEADER_TEXT}
                </div>
                <div style={styles.subHeaderText}>
                        {props.subHeaderText}
                </div>
            </div>
        </div>
    )
}
export default ProductHeader;