import { mount } from 'products/ProductsIndex';
// CartShow will match with container/webpack.config.js/remotes
import 'cart/CartShow';
console.log('Container!')

mount(document.querySelector('#my-products'))