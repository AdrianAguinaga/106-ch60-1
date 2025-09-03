var products = [
    {
        id:1,//id is unique
        title:"Ch 60 phone",
        price:999,
        image:"cellphone.jpeg",
        category:"smartphones"
    },
    {
        id:2,//id is unique
        title:"Ch60 tv",
        price:600,
        image:"tv.jpeg",
        category:"smart tv"
    },
     {
        id:3,//id is unique
        title:"Ch 60 laptop",
        price:500,
        image:"laptop.jpeg",
        category:"computers"
    },
       {
        id:4,//id is unique
        title:"Ch 60 mouse",
        price:100,
        image:"mouse.jpeg",
        category:"accessories"
    },
    // add more products if you want
]

class DataService {
    getProducts() {
        return products;
    }
}
export default DataService;