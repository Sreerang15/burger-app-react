import React, { Component } from "react";
import Aux from "../../hoc/Auxi";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

const PRICES = {
  salad: 10,
  cheese: 50,
  meat: 60,
  bacon: 70,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 0,
    purchasable: false,
  };

  updatePurchaseState = () => {
    if (this.state.totalPrice <= 0) {
      this.setState({ purchasable: false });
    }
  };

  addIngredientHandler = (type) => {
    //const oldCount = this.state.ingredients[type];
    //const updatedCount = oldCount++;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = ++this.state.ingredients[type];

    const newPrice = this.state.totalPrice + PRICES[type];
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
      purchasable: true,
    });

    //this.updatePurchaseState();
  };

  deleteIngredientHandler = (type) => {
    if (this.state.ingredients[type] > 0) {
      const updatedIngredients = { ...this.state.ingredients };
      updatedIngredients[type] = --this.state.ingredients[type];

      const newPrice = this.state.totalPrice - PRICES[type];

      if (newPrice == 0)
        this.setState({
          totalPrice: newPrice,
          ingredients: updatedIngredients,
          purchasable: false,
        });
      else
        this.setState({
          totalPrice: newPrice,
          ingredients: updatedIngredients,
        });
      //      this.updatePurchaseState();
    }
  };
  render() {
    return (
      <Aux>
        <Modal>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />

        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientDeleted={this.deleteIngredientHandler}
          price={this.state.totalPrice}
          prices={PRICES}
          purchasable={this.state.purchasable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
