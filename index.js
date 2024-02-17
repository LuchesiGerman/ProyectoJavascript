const saludar = function(nombre){  // function
    alert('Hola ' + nombre + '. Soy una función');
}
const Products = 
[
    {
        id:1,
        name: 'Lentes Toko',
        price: '50.000',
        description: 'Lentes Toko',
        image: 'images/Lentes Toko.webp'
    },
    {
        id:2,
        name: 'Lentes Marrok',
        price: '75.000',
        description: 'Lentes Marrok',
        image: 'images/Lentes Marrok.webp'
    },
    {
        id:3,
        name: 'Lentes Marzul',
        price: '50.000',
        description: 'Lentes Marzul',
        image: 'images/Lentes Marzul.webp'
    },
    {
        id:4,
        name: 'Lentes Rosal',
        price: '90.000',
        description: 'Lentes Rosal',
        image: 'images/Lentes Rosal.webp'
    }, 
    {
        id:5,
        name: 'Lentes Gernom',
        price: '78.000',
        description: 'Lentes Gernom',
        image: 'images/Lentes Gernom.webp'
    }, 
    {
        id:6,
        name: 'Lentes Vice',
        price: '75.500',
        description: 'Lentes Vice',
        image: 'images/Lentes Vice.webp'
    }, 
    {
        id:7,
        name: 'Lentes San Francisco',
        price: '69.900',
        description: 'Lentes San Francisco',
        image: 'images/Lentes San Francisco.webp'
    }, 
    {
        id:8,
        name: 'Lentes Roma',
        price: '75.000',
        description: 'Lentes Roma',
        image: 'images/Lentes Roma.webp'
    }, 
    {
        id:9,
        name: 'Lentes Aruba',
        price: '79.000',
        description: 'Lentes Aruba',
        image: 'images/Lentes Aruba.webp'
    },
    {
        id:10,
        name: 'Lentes Los Angeles',
        price: '85.000',
        description: 'Lentes Los Angeles',
        image: 'images/Lentes Los Angeles.webp'
    },  
]

const root = document.querySelector('#root');
const cart = []

const loadEvents = () =>
{
    const buttons = document.querySelectorAll('.button')
    for (const button of buttons) 
    {
        button.addEventListener('click', ()=> {
            const selectedProduct = Products.find(product => product.id === Number(button.id))
            if(selectedProduct){
                alert(`Se agregó al carrito el producto: ${selectedProduct.name}`)
                cart.push(selectedProduct)
            }
        })    
    }
}

const createProducts = () =>
{
    Products.forEach(product => {
        const card = document.createElement('div')
        card.innerHTML = `
            <img src='${product.image}' alt='${product.description}'>
            <h3>$${product.price}</h3>
            <h4>${product.description}</h4>
            <button id='${product.id}' class='button'>Agregar al carrito</button>
        `
        root.appendChild(card)
    });
    loadEvents()
}

createProducts()



