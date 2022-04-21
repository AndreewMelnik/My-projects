import { Component} from 'react'
import Header from '../header/header';
import Features from '../features/features';
import IntroSlider from '../intro-slider/intro-slider';
// import Features from '../features/features';
// import ProductSlider from '../product-slider/product-slider';
// import Giftset from '../giftset/giftset';
// import ComboSlider from '../combo-slider/combo-slider';


import './app.css';

class App extends Component {
    render() {
      return (
        <div>
          <Header/>
          <IntroSlider/>
          <Features/>
        </div>
    );
  }
}


export default App;