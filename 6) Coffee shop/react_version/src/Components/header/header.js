import "./header.css";
import revoLogo from "../../img/svg/revo_logo.svg";


const Header = () => {

    return (
        <div className="header">
            <HeaderWrapper/>
            <HeaderMenu/>
        </div>
    )
}

const HeaderWrapper = () => {
    return(
            <div className="header__logo">
                <a href="!#" className="header__logo-link">
                    <img src={revoLogo}  alt="Your Personalized Coffee" className="header__logo-pic"/>
                </a>
            </div>
    )
}

const HeaderMenu = () => {
    return(
        <nav className="header__menu">
            <ul className="header__list">
                <HeaderItem name="COFFEE" />
                <HeaderItem name="GIFTSETS" />
                <HeaderItem name="HOUSE BLENDS" />
                <HeaderItem name="COMBO SETS" />
                <HeaderItem name="CONTACT US" />
            </ul>
        </nav>
    )
}

const HeaderItem = (props) => {
    return(
          <div className="header__item">
              <a href="#!" className="header__link">{props.name}</a>
          </div> 
 )
}


export default Header;