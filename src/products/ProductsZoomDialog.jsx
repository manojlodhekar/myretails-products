import React, { Component, } from 'react'
import { Modal, Image } from 'semantic-ui-react'
import injectSheet from 'react-jss'


const styles = {
  leftIcon: {
    height: 50,
    left: 25,
    cursor: 'pointer',
    position: 'relative',
    zIndex: 1,
    marginTop: 220
  },
  rightIcon: {
    height: 50,
    right: 25,
    position: 'relative',
    marginTop: 220,
    cursor: 'pointer'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 11,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  enlargeImage:{
    width: '100%',
    height: 'auto',
    cursor: 'zoom-out'
  },
  normalImage:{
    width: '68vh',
    height: 'auto',
    cursor: 'zoom-in'
  },
  zoomedLayout:{
    marginTop: '5px', 
    width:'auto', 
    height:'98%', 
    overflow: 'auto'
  },
  '@media (max-width: 768px)': {
    leftIcon: {
      position: 'fixed',
      left: 40,
    },
    rightIcon: {
      position: 'fixed',
      right: 40,
    },
  },
  '@media (max-width: 414px)': {
    leftIcon: {
      position: 'fixed',
      height: '35px',
      left: 35,
    },
    rightIcon: {
      position: 'fixed',
      height: '35px',
      right: 35,
    },
  },
  '@media (max-width: 375px)': {
    leftIcon: {
      position: 'fixed',
      height: '35px',
      left: 35,
    },
    rightIcon: {
      position: 'fixed',
      height: '35px',
      right: 35,
    }
  },

  '@media (max-width: 320px)': {
    leftIcon: {
      position: 'fixed',
      height: '35px',
      left: 35,
      marginTop: 140
    },
    rightIcon: {
      position: 'fixed',
      height: '35px',
      right: 35,
      marginTop: 140
    }
  },

}
class ProductsZoomDialog extends Component{
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      size:'fullscreen',
      dimmer: 'blurring',
      zoomedImage: '',
      currentImgIndex: 1,
      ModalVisibleStatus: true,
      enlargeImageClass: styles.normalImage
    }
    this.closePopup = this.closePopup.bind(this)
    this.goToNextImage = this.goToNextImage.bind(this)
    this.goToPrevImage = this.goToPrevImage.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.openPopup,
      currentImgIndex: nextProps.currentImgIndex,
      zoomedImage: nextProps.imageURLs[nextProps.currentImgIndex].image
    })
  }
  closePopup = () =>{
    this.setState({
      open: false
    })
    this.props.popupClosed()
  }
  goToNextImage = () =>{
    if(this.state.currentImgIndex < this.props.imageURLs.length - 1){
      this.setState({
        currentImgIndex: this.state.currentImgIndex + 1,
        zoomedImage: this.props.imageURLs[this.state.currentImgIndex + 1].image
      })
    }else{
      this.setState({
        currentImgIndex: 0,
        zoomedImage: this.props.imageURLs[0].image
      })
    }
  }
  enlargeImage = () =>{
    this.isEnlarged = ! this.isEnlarged;
    this.setState({
      enlargeImageClass:this.isEnlarged ?  styles.enlargeImage : styles.normalImage
    })
  }
  goToPrevImage = () =>{
    if(this.state.currentImgIndex > 0){
      this.setState({
        currentImgIndex: this.state.currentImgIndex - 1,
        zoomedImage: this.props.imageURLs[this.state.currentImgIndex - 1].image
      })
    }else{
      this.setState({
        currentImgIndex: this.props.imageURLs.length - 1,
        zoomedImage: this.props.imageURLs[this.props.imageURLs.length - 1].image
      })
    }
  }

  render(){
    const { classes, } = this.props
    return(
      <Modal size={this.state.size} dimmer={this.state.dimmer} open={this.state.open}  closeIcon
        style={styles.zoomedLayout}
        onClose={this.closePopup}>
          <Modal.Header>{this.state.currentImgIndex + 1} / {this.props.imageURLs.length}</Modal.Header>
          <Modal.Content image style={{textAlign: '-webkit-center'}}>
            <img
              alt="previousProduct"
              className={classes.leftIcon}
              onClick={this.goToPrevImage}
              src='/assets/arrow_left.png'
            />
            <Image wrapped style={this.state.enlargeImageClass}
              fluid centered src={this.state.zoomedImage}
              onClick={this.enlargeImage}
              >
              </Image>
              <img
                alt="nextProduct"
                className={classes.rightIcon}
                onClick={this.goToNextImage}
                src='/assets/arrow_right.png'
              />
          </Modal.Content>

        </Modal>
    )
  }
}

export default (injectSheet(styles)(ProductsZoomDialog))
