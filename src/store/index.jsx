import {createStore} from 'redux';

const cartReducer=(state={cartItems:[],countItems:0},action)=>{
    if(action.type==='ADD_TO_CART'){
      console.log(state.cartItems);
        const newCartItems=state.cartItems.concat(action.payload);
        const newCountItems=state.countItems+1;
        // console.log(newCountItems);
        localStorage.setItem('cartItems',JSON.stringify(newCartItems));
        localStorage.setItem('countItems',JSON.stringify(newCountItems));
        return {cartItems:newCartItems,countItems:newCountItems};

    }
    if(action.type==='MODIFY_CART_ITEM'){
      const newCartItems=state.cartItems.map(item=>{
        if(item.product.id===action.payload.id){
          item.quantity+=action.payload.quantity;
          
        }
        return item;
      });
      localStorage.setItem('cartItems',JSON.stringify(newCartItems));
      localStorage.setItem('countItems',JSON.stringify(state.countItems));
      return {cartItems:newCartItems,countItems:state.countItems};
    }
    if(action.type==='REMOVE_FROM_CART'){
      console.log(action.payload);
      console.log(state.cartItems);
      const newCartItems=state.cartItems.filter(item=>item.product.id!==action.payload);
      const newCountItems=state.countItems-1;
      localStorage.setItem('cartItems',JSON.stringify(newCartItems));
      localStorage.setItem('countItems',JSON.stringify(newCountItems));
      return {cartItems:newCartItems,countItems:newCountItems};
    }
    if(action.type==='GET_PRODUCTS'){
      const newCartItems=action.payload;
      const newCountItems=action.payload!==undefined?action.payload.length:0;
      localStorage.setItem('cartItems',JSON.stringify(newCartItems));
      localStorage.setItem('countItems',JSON.stringify(newCountItems));
      return {cartItems:newCartItems,countItems:newCountItems};
    }
    if(action.type==='CLEAR_CART'){
      const newCartItems=[];
      const newCountItems=0;
      localStorage.setItem('cartItems',JSON.stringify(newCartItems));
      localStorage.setItem('countItems',JSON.stringify(newCountItems));
      return {cartItems:newCartItems,countItems:newCountItems};
    }
    if(action.type==='INCREMENT_FROM_CART')
    {
      const newCartItems=state.cartItems.map(item=>{
        if(item.product.id===action.payload){
          item.quantity +=1;
          state.countItems+=1;
        }
        return item;
      });
      localStorage.setItem('cartItems',JSON.stringify(newCartItems));
      localStorage.setItem('countItems',JSON.stringify(state.countItems));
      return {cartItems:newCartItems,countItems:state.countItems};
    }
    if(action.type==='DECREMENT_FROM_CART')
    {
      const newCartItems=state.cartItems.map(item=>{
        if(item.product.id===action.payload){
          item.quantity -=1;
          state.countItems-=1;
        }
        return item;
      });
      localStorage.setItem('cartItems',JSON.stringify(newCartItems));
      localStorage.setItem('countItems',JSON.stringify(state.countItems));
      return {cartItems:newCartItems,countItems:state.countItems};
    }

    return state;

}

const store = createStore (cartReducer);


export default store;