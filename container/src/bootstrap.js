import { mount as productsMount } from 'products/ProductsIndex';
// CartShow will match with container/webpack.config.js/remotes
import { mount as cartMount } from 'cart/CartShow';
console.log('Container!')

productsMount(document.querySelector('#my-products'))
cartMount(document.querySelector('#my-cart'))