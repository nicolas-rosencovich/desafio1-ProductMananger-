const ProductMananger = require("./productMananger");

const producto = new ProductMananger();


 

//Productos title,description,price,thumbnail ,code,stock
console.log(producto.addProduct("Producto prueba", "Este es un producto prueba", 200, " Sin imagen", "abc123", 25 ))
console.log(producto.addProduct("Gibson Les paul", "Gibson Les paul Custom black", 5000, "https://peachguitars.2dimg.com/114/4o0a5652_2314b7f614.jpg", "lp23h", 5 ))




console.log(producto.getProducts());
/* console.log(producto.getProductById(1)); */

