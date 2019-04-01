import React, { Component, } from 'react';
import { Image } from 'semantic-ui-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const styles = {
  carouselImageContainer: {
    height: '50px',
    justifyContent: 'center',
  },
  carouselSlideContainer: {
    justifyContent: 'center',
    padding: 10,
  },
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: 'none' }}
        onClick={onClick}
      >
      <Image src='/assets/arrow_right.png' className="carouselBtn"/>      
      </div>
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "none" }}
        onClick={onClick}
        >
        <Image src='/assets/arrow_left.png' className="carouselBtn"/>
        </div>
    );
  }

class ProductCarousel extends Component {
  componentDidMount() {
  }

  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0
    }

  }

  selectProductImage = (index) =>{
      console.log(index);
    this.props.selectProductImage(index, this.props.productsList[index]);
    this.setState({
      selectedIndex: index
    })
  }
  render() {
    const activeIndex = this.props.currentActiveIndex;
    const sliderClass = 'sliderBkg';
    const noOfSlides = 3;
    const settings = {
       initialSlide: activeIndex,
       speed: 500,
      focusOnSelect: false,
      className: sliderClass,
      centerMode: false,
      infinite: true,
      centerPadding: '10px',
      slidesToShow: noOfSlides,
      swipeToSlide: true,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    }

    const sliderContent = this.props.productsList.map((imageURL, index) => {
      let imgClass = '';
        if(index === this.state.selectedIndex){
          imgClass = ' selected'
        }

      return (
        <div style={styles.carouselSlideContainer} key={index}
        onClick={(e) => this.selectProductImage(index)}>
        
          <div style={styles.carouselImageContainer}
          >
            <img
              alt="RetailsProduct"
              src={imageURL.image}
              style={{ height: '100%'}}
              className={'productCarousel' + imgClass}
            />
          </div>
        </div>
      )
    })

    return (
      sliderContent.length ? (
        <Slider {...settings}>
          {sliderContent}
        </Slider>
      ) : null
    )
  }
}

export default ProductCarousel 
