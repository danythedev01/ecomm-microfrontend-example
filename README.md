# ecomm-microfrontend-example

Folder structure:
```
├── cart/
│ ├── package.json
│ ├── webpack.config.js
│ ├── src/
│ └── public/
│
├── container/
│ ├── package.json
│ ├── webpack.config.js
│ ├── src/
│ └── public/
│
├── products/
│ ├── package.json
│ ├── webpack.config.js
│ ├── src/
│ └── public/
│
├── screenshots/
│ ├── Context-diagram.png
│ ├── cart-loaded-successfully.png
│ ├── cart_module-introduction.png
│ ├── container-webpack_config.png
│ ├── files-lifecycle.png
│ └── module_federation-working.png
│
└── README.md
```


## 🧩 Microfrontends

```yaml

### **Products**
- Port: `8081`
- Exposes the module: `./ProductsIndex`
- Main configuration file: `webpack.config.js`
- Uses `faker@5.1.0` to generate random data
- Uses `HtmlWebpackPlugin` to generate the base HTML file

### **Cart**
- Port: `8082`
- Exposes the module: `./CartShow`
- Configuration similar to `products`
- Shares `faker@5.1.0` as a common dependency


```

### Main dependencies

- webpack ^5.88.0

- webpack-dev-server ^4.7.4

- html-webpack-plugin ^5.5.0

- faker ^5.1.0

- nodemon ^2.0.15

### **Container**

- Acts as the host application that consumes the remote modules products and cart

- Uses the same webpack.config.js structure to integrate them through the ModuleFederationPlugin

## ⚙️ Webpack Configuration

Each microfrontend defines its own `webpack.config.js`:
```js
new ModuleFederationPlugin({
    name: 'cart',
    filename: 'remoteEntry.js',
    exposes: {
    './CartShow': './src/index',
    },
    // when module deferations use `shared: ['faker']`, make sure both use the same version as when versions are different webpack endup loading both copies as they're different versions
    shared: ['faker']
})
```
