import Data from "../data/feeds.json"
const initialState = {
  item: Data,
  totalAmount: 0,
  totalItem: 0,

};

const ChangeColor = (state = initialState, action) => {

  switch (action.type) {

    case "Total":

      let { totalItem, totalAmount } = state.item.reduce((accum, cvalue) => {
        let { price, quantity } = cvalue;
        let updatedtotalAmount = price * quantity;
        accum.totalAmount += updatedtotalAmount;
        accum.totalItem += quantity;
        return accum;
      },
        {
          totalItem: 0,
          totalAmount: 0,
        })
      return { ...state, totalItem, totalAmount };
      ;

    case "Increment":
      let tempCartInc = state.item.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      return { ...state, item: tempCartInc };

    case "Decrement":
      let CartInc = state.item.map((car) => {
        if (car.id === action.payload) {
          return { ...car, quantity: (car.quantity - 1 > 0) ? car.quantity - 1 : 0 };
        }
        return car;
      });
      return { ...state, item: CartInc };

    default:
      return state;
  }
}

export default ChangeColor;