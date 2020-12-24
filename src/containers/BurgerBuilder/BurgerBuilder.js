import React, { Component } from "react";
import Aux from "../../hoc/Auxi";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import orderSummary from "../../components/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";

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
    purchasing: false,
    loading: false,
  };

  updatePurchaseState = () => {
    if (this.state.totalPrice <= 0) {
      this.setState({ purchasable: false });
    }
  };

  addIngredientHandler = (type) => {
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = ++this.state.ingredients[type];

    const newPrice = this.state.totalPrice + PRICES[type];
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
      purchasable: true,
    });
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
    }
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = async () => {
    try {
      this.setState({ loading: true });
      const order = {
        ingredients: this.state.ingredients,
        price: this.state.totalPrice,
        name: "abc",
        address: {
          street: "test",
          country: "India",
        },
      };

      await axios.post("/orders.json", order);
      this.setState({ loading: false });
    } catch (err) {
      console.log(err);
      this.setState({ loading: false });
    }
  };
  render() {
    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinue={this.purchaseContinueHandler}
        total={this.state.totalPrice}
      />
    );
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />

        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientDeleted={this.deleteIngredientHandler}
          price={this.state.totalPrice}
          prices={PRICES}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
