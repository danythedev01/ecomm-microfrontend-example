import faker from 'faker';

const mount = (el) => {

    let products = '';

    for (let i = 0; i<10; i++) {
        const name = faker.commerce.productName();
        const newProduct = `<div>${name}</div>`;
        products += newProduct;
    }

    el.innerHTML = products;

}

// Context/Situation #1
/*
    - We are running this file in development in isolation
    - We are using our local index.html file
    - Which DEFINITELY has an element with an id of 'dev-products'

    We want to immediately render our app into that element
*/
// process.env.NODE_ENV get set automatically by webpack `mode: 'development'`

if (process.env.NODE_ENV === "development") {

    const el = document.querySelector('#dev-products');

    // Assuming our container doesn't have an element
    // with id 'dev-products'...
    if (el) {
        // We are probably running in isolation
        mount(el)
    }
}

// Context/Situation #2
/*
    - We are running this file in development or production through the CONTAINER APP
    - NO GUARANTEE that an element with an id of 'dev-products' exists

    WE DON'T WANT try to immediately render the app
*/

export { mount }