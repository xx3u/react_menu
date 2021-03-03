import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Menu.css';
import ImgMediaCard from "../../components/UI/Card/Card";
import { retrieveData } from './../../store/actions/actions';


const Menu = () => {
  const dishes = useSelector(state => state.menu.dishes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveData());
  }, [dispatch])

  return (
    <>
      <div className="Menu">
        <h1 className="menuTitle">Menu</h1>
        {
          dishes.map((dish) => {
            return <ImgMediaCard
              key={dish.id}
              image={dish.image}
              name={dish.name}
              price={dish.price}
            />
          })
        }
      </div>
      <div className="Cart">
        <h2>Cart</h2>
      </div>
    </>
  )
}

export default Menu;