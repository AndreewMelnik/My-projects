import {Component} from 'react'
import "./combo-slider.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Morning from "../../img/svg/morning.svg";
import Origin from "../../img/svg/origin.svg";
import Everyday from "../../img/svg/everyday.svg";
import Rich from "../../img/svg/rich.svg";
import Honey from "../../img/png/honey.png";
import Natural from "../../img/png/natural.png";





export default class ComboSlider extends Component {
    render() {
      const settings = {
            dots: true,
            infinite: true,
            speed: 700,
            slidesToShow: 4,
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
    {name: "Combo Revo Morning", price: "$ 47.00", old_price: "$ 50.00",description: "Bitter, sweet aftertaste, floral aroma", src:Morning,id:1},
    {name: "Combo Revo Origin", price: "$ 56.00", old_price: "$ 60.00",description: "Sweet, less bitter, sour strawberry flavour", src: Origin,id:2},
    {name: "Combo Revo Everyday", price: "$ 45.00", old_price: "$ 47.00",description: "Balanced, bitter taste of chocolate", src: Everyday,id:3},
    {name: "Combo Revo Rich", price: "$ 40.00", old_price: "$ 45.00",description: "Rich, bitter, traditional flavour", src: Rich,id:4},
    {name: "Combo Revo Honey", price: "$ 47.00", old_price: "$ 50.00",description: "Sweet , with a slight apple sourness", src: Honey,id:5},
    {name: "Combo Revo Natural", price: "$ 47.00", old_price: "$ 50.00",description: "Sweet aftertaste, floral scent, strawberry sour taste", src: Natural,id:6},
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