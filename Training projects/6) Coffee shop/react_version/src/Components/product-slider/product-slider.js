import{ Component}from 'react'
import "./product-slider.css";

import Morning from "../../img/svg/morning";
import Origin from "../../img/svg/origin";
import Everyday from "../../img/svg/everyday";
import Rich from "../../img/svg/rich";
import Honey from "../../img/png/honey";
import Natural from "../../img/png/natural";

class ProductSlider  extends Component {
    constructor(props) {
      super(props);
      this.state = {
          // Imitating Server Data
        serverData:[
          {name: "REVO Morning", price: "$ 19.00", description: "Bitter, sweet aftertaste, floral aroma", src: {Morning},id:1},
          {name: "REVO Origin", price: "$ 22.00", description: "Sweet, less bitter, sour strawberry flavour", src: {Origin},id:2},
          {name: "REVO Everyday", price: "$ 17.00", description: "Balanced, bitter taste of chocolate", src: {Everyday},id:3},
          {name: "REVO Rich", price: "$ 16.00", description: "Rich, bitter, traditional flavour", src: {Rich},id:4},
          {name: "REVO Honey", price: "$ 19.00", description: "Sweet , with a slight apple sourness", src: {Honey},id:5},
          {name: "REVO Natural", price: "$ 19.00", description: "Sweet aftertaste, floral scent, strawberry sour taste", src: {Natural},id:6}
        ]
      }
    }
        render() {
          return (
           <div className="product">
            <ProductText/>
            <SliderItem/>
        </div>
        );
      }
    }
    
    
    const SliderItem = ({serverData}) => {
      //динамически формируем список с помощью "map"
      //пишем колбэк ф-ию где 'item'-каждый отдельный элемент который будет последовательно идти в массиве
      
      const elements = serverData.map(item => {
      const{id} = item
      
            return ( 
         <ProductCard {...item} key={id}/> 
          )
      })
          return (
            <div className="product__content">
                {elements}
            </div>
        )
    
      
   }


const ProductText = (props) => {
    return(
        <div class="product__text">
        <h2 class="product__subtitle subtitle">Choose Your Favorite</h2>
        <h1 class="product__title title">COFFEE BLENDS</h1>
     </div>
 )
}


const ProductCard = (props) => {

   const {name, price, description,src} = props;
    return(
      <div class="slider__item">
        <div class="product__img">
          <img src={src} alt={name} class="product__image"/>
        </div>
          <div class="product__price price product__price">{price}</div>
          <h1 class="product__name product__name">{name}</h1>
          <h2 class="product__description product__description">{description}</h2>
          <div class="product__btn">
            <button class="product____btn buy">BUY NOW</button>
            <button class="product____btn desc">MORE</button>
          </div>
       </div>
 )
}


export default ProductSlider;
