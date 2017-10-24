import { ShoppingCart } from './shopping-cart';
export class Order{
    date : number;
    items: any[]=[];
    constructor(private userId:string, cart: ShoppingCart, private shippingDetails){
        this.date = new Date().getTime();
        this.items = cart.items.map(item => {
            return {
              product: {
                title: item.title,
                imageUrl: item.imageUrl,
                price: item.price
              },
              quantity: item.quantity,
              totalPrice: item.totalPrice
            }
          }); 
    }
}