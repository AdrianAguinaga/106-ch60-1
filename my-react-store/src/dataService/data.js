var products = [
    {
        id:1,//id is unique
        title:"iPhone 14 Pro",
        price:999,
        image:"placeholder",
        category:"smartphones"
    },
    {
        id:2,//id is unique
        title:"Samsung Smart TV",
        price:600,
        image:"placeholder",
        category:"smart tv"
    },
     {
        id:3,//id is unique
        title:"Lenovo Laptop",
        price:500,
        image:"placeholder",
        category:"computers"
    },
    // add more products if you want
]

class DataService {
    getProducts() {
        return products;
    }
}
export default DataService;