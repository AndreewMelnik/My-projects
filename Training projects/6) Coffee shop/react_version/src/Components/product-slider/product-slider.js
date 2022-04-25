import {Component} from 'react'
import "./product-slider.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Morning from "../../img/svg/morning.svg";
import Origin from "../../img/svg/origin.svg";
import Everyday from "../../img/svg/everyday.svg";
import Rich from "../../img/svg/rich.svg";
import Honey from "../../img/png/honey.png";
import Natural from "../../img/png/natural.png";

export default class MultipleRows extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      // centerPadding: "6px",
      // adaptiveHeight:true,
      slidesToShow: 2,
      speed: 600,
      rows: 2,
      slidesPerRow: 1,
      arrows:true,
      dots:true,
    };
    return (
      <div className="product">
        <ProductText/>
      <div>
        <Slider {...settings}>
          {serverData.map((card) =>(
            <ProductCard key={card.id} {...card} />
          )
          )}
          {/* <div>
            <h3><ProductCard /></h3>
          </div> */}
          {/* <div>
            <h3><ProductCard /></h3>
          </div>
          <div>
            <h3><ProductCard /></h3>
          </div> */}
          {/* <div>
            <h3><ProductCard /></h3>
          </div> */}
          {/* <div>
            <h3><ProductCard /></h3>
          </div>
          <div>
            <h3><ProductCard /></h3>
          </div>
          <div>
            <h3><ProductCard /></h3>
          </div>
          <div>
            <h3><ProductCard /></h3>
          </div> */}
          
        </Slider>
      </div>
      </div>
    );
  }
}



// class ProductSlider  extends Component {

//         render() {
//           return (
//            <div className="product">
//             <ProductText/>
//             <SliderItem/>
//         </div>
//         );
//       }
//     }
    

// class SliderItem extends Component {
//     render() {
//         return <div className="slider">
     
//             {serverData.map((snippet, id) => <ProductCard key={id} {...snippet} />)}
//         </div>;
//     }
// }

const serverData = [
  {name: "REVO Morning", price: "$ 19.00", description: "Bitter, sweet aftertaste, floral aroma", src:Morning,id:1},
  {name: "REVO Origin", price: "$ 22.00", description: "Sweet, less bitter, sour strawberry flavour", src: Origin,id:2},
  {name: "REVO Everyday", price: "$ 17.00", description: "Balanced, bitter taste of chocolate", src: Everyday,id:3},
  {name: "REVO Rich", price: "$ 16.00", description: "Rich, bitter, traditional flavour", src: Rich,id:4},
  {name: "REVO Honey", price: "$ 19.00", description: "Sweet , with a slight apple sourness", src: Honey,id:5},
  {name: "REVO Natural", price: "$ 19.00", description: "Sweet aftertaste, floral scent, strawberry sour taste", src: Natural,id:6},
  {name: "REVO Everyday", price: "$ 17.00", description: "Balanced, bitter taste of chocolate", src: Everyday,id:7},
  {name: "REVO Rich", price: "$ 16.00", description: "Rich, bitter, traditional flavour", src: Rich,id:8}
]

const ProductText = (props) => {
    return(
        <div className="product__text">
        <h2 className="product__subtitle subtitle">Choose Your Favorite</h2>
        <h1 className="product__title title">COFFEE BLENDS</h1>
     </div>
 )
}


class ProductCard extends Component  {
  render() {
   const {name, price, description,src} = this.props;
    return(
    <div className="slider__item">
        <div className="product__img">
           <img src={src} alt={name} className="product__image"/>
        </div>
     <div className="product__content">
         <div className="product__price price product__price">{price}</div>
          <h1 className="product__name product__name">{name}</h1>
          <h2 className="product__description product__description">{description}</h2>
          <div className="product__btn">
            <button className="product____btn buy">BUY NOW</button>
            <button className="product____btn desc">MORE</button>
          </div>
       </div>
   </div>
)}}


// export default ProductSlider;




