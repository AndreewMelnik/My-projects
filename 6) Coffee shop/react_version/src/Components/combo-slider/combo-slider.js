import {Component} from 'react'
import "./combo-slider.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import CMorning from "../../img/png/combomorning.png";
import COrigin from "../../img/png/comboorigin.png";
import CEveryday from "../../img/png/comboeveryday.png";
import CRich from "../../img/png/comborich.png";
import CHoney from "../../img/png/combohoney.png";
import CNatural from "../../img/png/combonatural.png";





export default class ComboSlider extends Component {
    render() {
      const settings = {
            centerMode: false,
            dots: true,
            infinite: true,
            speed: 700,
            slidesToShow: 3,
            slidesToScroll: 2
      };
      return (
        <div className="product">
          <ComboText/>
        <div>
          <Slider {...settings}>
            {ComboData.map((card) =>(
              <ComboCard key={card.id} {...card} />
            )
            )}
      </Slider>
      </div>
      </div>
    );
  }
}

const ComboData = [
    {name: "Combo Revo Morning", price: "$ 47.00", old_price: "$ 50.00", src:CMorning, id:1,
    description: "Revo Morning is an innovation from the perfect recipe that blends the bitter taste of..."},
    {name: "Combo Revo Origin", price: "$ 56.00", old_price: "$ 60.00", src: COrigin, id:2,
    description: "If curious about Arabica beans, then Revo Origin will be the right choice to start."},
    {name: "Combo Revo Everyday", price: "$ 45.00", old_price: "$ 47.00", src: CEveryday, id:3,
    description: "Revo Everyday is a blend of robusta bean bitterness and aroma."},
    {name: "Combo Revo Rich", price: "$ 40.00", old_price: "$ 45.00", src: CRich, id:4,
    description: "The caffeine content in Revo Bold is strong enough to keep you awake to work..."},
    {name: "Combo Revo Honey", price: "$ 47.00", old_price: "$ 50.00", src: CHoney, id:5,
    description: "Honey - in the name comes from the method of processing Arabica beans..."},
    {name: "Combo Revo Natural", price: "$ 47.00", old_price: "$ 50.00", src: CNatural, id:6,
    description: "Revo Natural is a special coffee line of dedicated to those who want to enjoy..."},
  ]

const ComboText = (props) => {
    return(
        <div className="product__text">
        <h2 className="product__subtitle subtitle">Choose Your Favorite</h2>
        <h1 className="product__title title">COFFEE BLENDS</h1>
     </div>
 )
}


class ComboCard extends Component  {
  render() {
   const {name, price, description,src} = this.props;
    return(
    <div className="combo-slider__item">
        <div className="combo__img">
           <img src={src} alt={name} className="product__image"/>
        </div>
     <div className="combo__content">
         <div className="combo__price price product__price">{price}</div>
          <h1 className="combo__name product__name">{name}</h1>
          <h2 className="combo__description product__description">{description}</h2>
          <div className="combo__btn">
            <button className="combo____btn buy">BUY NOW</button>
            <button className="combo____btn desc">MORE</button>
          </div>
       </div>
   </div>
)}}