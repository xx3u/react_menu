import ImgMediaCard from "../../components/UI/Card/Card";
import './Menu.css';

const Menu = () => {
  return(
    <>
      <div className="Menu">
        <h1 className="menuTitle">Menu</h1>
        <ImgMediaCard/>
        <ImgMediaCard/>
        <ImgMediaCard/>
        <ImgMediaCard/>
      </div>
      <div className="Cart">
        <h2>Cart</h2>
      </div>
    </>
  )
}

export default Menu;