import {SHOPPING_CART_ITEMS, PRODUCTS} from "./mock-products";

export const create = (product) => {
  return fetch('https://classroom-playground-api.web.app/products/gilberto/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })
  .then(res => res.json())
};


export const list = () => {
  console.log('listing products')
  return PRODUCTS;
};
// export const list= ()=>{
//   fetch('https://classroom-playground-api.web.app/products/gilberto/')
//   .then((res) => res.json());
// }

export const listShoppingCart = () => {
  console.log('listing shopping cart')
  return SHOPPING_CART_ITEMS;
};
// export const listShoppingCart = () => {
//   fetch('https://classroom-playground-api.web.app/shoppingCart/gilberto/')
//   .then((res) => res.json());
// }

export const addToShoppingCart = (product) => {
  console.log('add', product.name, 'to shopping cart')
  SHOPPING_CART_ITEMS.push(product);
};
// export const addToShoppingCart = (product) =>
//   fetch('https://classroom-playground-api.web.app/shoppingCart/gilberto/' + product.id, {method: 'PUT'},
// );

export const removeFromShoppingCart = (product) => {
  console.log('remove', product.name, 'from shopping cart')
  const index = SHOPPING_CART_ITEMS.findIndex(value => value.id === product.id);
  SHOPPING_CART_ITEMS.splice(index, 1);
};
// export const removeFromShoppingCart = (product) =>
// fetch('https://classroom-playground-api.web.app/shoppingCart/gilberto/' + product.id, {method: 'DELETE'},
// );
