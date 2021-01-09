import { Component } from 'react';
import { BuildControls } from '../../components/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';


const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component{
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 1
    },
    totalPrice: 4
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedIngredients = {
      ...this.state.ingredients,
      [type]: oldCount + 1
    };
    // Update the price as well
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount === 0) return;

    const updatedIngredients = {
      ...this.state.ingredients,
      [type]: oldCount - 1
    };
    // Update the price as well
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
  }

  render(){

    const lessDisabled = Object.fromEntries(
      Object.entries(this.state.ingredients).map(([ing, count]) => {
        return [ing, count <= 0]
      })
    )

    return (
      <>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          price={this.state.totalPrice}
          moreHandler={this.addIngredientHandler}
          lessHandler={this.removeIngredientHandler}
          lessDisabled={lessDisabled}
        />
      </>
    );
  }
}

export default BurgerBuilder;
