import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveData } from '../../store/actions/menuActions';
import { addToCart, getCartItem } from './../../store/actions/cartActions';
import './Menu.css';
import ImgMediaCard from "../../components/UI/Card/Card";
import InsetList from './../../components/UI/List/List'
import Button from '@material-ui/core/Button';


const Menu = () => {
  const dishes = useSelector(state => state.menu.dishes);
  const cartItems = useSelector(state => state.cart.cartItems);
  const order = useSelector(state => state.cart.order);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveData());
  }, [dispatch])

  useEffect(() => {
    dispatch(getCartItem());
  }, [dispatch])

  const handleChange = (name, price) => {
    dispatch(addToCart(name, price))
  }

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
              click={() => handleChange(dish.name, dish.price)}
            />
          })
        }
      </div>
      <div className="Cart">
        <h2 className="cartTitle">Cart</h2>
        {
          dishes.map((dish) => {
            return <InsetList 
              key={dish.id}
              image={dish.image}
              name={dish.name}
              quantity={cartItems[dish.name]}
              price={dish.price * cartItems[dish.name]}
            />
          })
        }
        <h3>Delivery: 500 KZT</h3>
        <h3>Total Price: {totalPrice} KZT</h3>
        <Button variant="outlined" size="medium" color="primary" disabled={ order ? false: true}>
          Place Order
        </Button>
      </div>
    </>
  )
}

export default Menu;