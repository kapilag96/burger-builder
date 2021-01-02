import './Burger.css';
import BurgerIngredient from './BurgerIng/BurgerIng';

const Burger = props => {

  let ingredients = [];
  for (const [ing, count] of Object.entries(props.ingredients)){
    for (let i=0; i < count; i++){
      ingredients.push(<BurgerIngredient type={ing} key={ing + i} />)
    }
  }

  if (ingredients.length === 0) ingredients = <p>Please add some ingredients to get started.</p>
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default Burger;
