import './Burger.css';
import BurgerIngredient from './BurgerIng/BurgerIng';

const Burger = props => {
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default Burger;
