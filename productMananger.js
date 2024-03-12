class ProductMananger{
    #products;
    static idProducto = 0;

    constructor(){
        this.#products = []
    }


    addProduct(title,description,price,thumbnail ,code,stock){
   
        if((!title || !description|| !price
            || !thumbnail || !code || !stock))
            return "todos los parámetoros son requeridos  [title,description,price,thumbnail ,code,stock]"
                

const codeRepetido=  this.#products.some(p => p.code== code);

        if( codeRepetido)
         return `El código ${code} ya se encuetra repetido en otro producto`
//acá s evalida que no haya repeticiones de ódigop
//Id autoincrementable

ProductMananger.idProducto = ProductMananger.idProducto + 1;
const id = ProductMananger.idProducto ;

const nuevoProducto = {
            id,
            description,
            price,
            thumbnail,
            code,
            stock,
        };
        this.#products.push(nuevoProducto);

        return `Producto agregado satisfactoriamente!`;


        
    }

    getProducts(){
        return this.#products
    }

    getProductById(id){
     const producto =  this.#products.find(p =>p.id == id)
     if(producto)

        return producto;

    else
     
        return `Not found del producto con id ${id}`

    
        //Not Found

    }
}


module.exports= ProductMananger