class Product {
    constructor(id, title, description, price, thumbnail, code, stock) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        // Verifica que todos los campos estén presentes
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log('Todos los campos son obligatorios');
            return;
        }
        
        // Verifica si el código ya existe
        const duplicateCode = this.products.find(product => product.code === code);
        if(duplicateCode){
            console.log('El código ya existe');
            return;
        }

        const product = new Product(this.nextId++, title, description, price, thumbnail, code, stock);
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    removeProduct(code) {
        const index = this.products.findIndex(product => product.code === code);
        if (index !== -1) {
            this.products.splice(index, 1);
        } else {
            console.log('Producto no encontrado');
        }
    }

    updateProduct(code, updatedProduct) {
        const index = this.products.findIndex(product => product.code === code);
        if (index !== -1) {
            this.products[index] = {...this.products[index], ...updatedProduct};
        } else {
            console.log('Producto no encontrado');
        }
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            console.log('Producto no encontrado');
        }
    }
}

// 1era etapa de Testing
const manager = new ProductManager();
const products = manager.getProducts();
console.log(products);

// Segunda etapa de testing 

manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);


console.log(products);

// Tercera etapa de testing - codigo duplicado
manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

// Cuarta etapa de testing - codigo duplicado
manager.getProductById(3)