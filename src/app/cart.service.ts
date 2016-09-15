import { Injectable  } from '@angular/core';
import { Cart } from "./model/cart"
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';
import { CartItem } from "./model/cart-item"
import { Observable }     from 'rxjs/Observable'
/*
* Local Service use for store what user is bought
*/
const LOCAL_STORAGE_NAME =  "hop-fb-cart"

@Injectable()
export class CartService {

  private cart:Cart;
  public cart_promise:Promise<Cart>  

  private loadEvent

  constructor(private af:AngularFire) { 
    var load_cart
    if(localStorage[LOCAL_STORAGE_NAME])
    {
      this.cart = Cart.load(localStorage[LOCAL_STORAGE_NAME])
          this.cart_promise = new Promise<Cart>((resolve, reject) => {
            resolve( Cart.load(localStorage[LOCAL_STORAGE_NAME]) )   
          })
      
    }else{
      this.cart = new Cart();
    }
    
  }
  //check if item in cart still available or price have been chagne or not
  updateCart() :Observable<CartItem[]>{
    return this.af.database.object('courses').map(resp => {
      console.log(resp)
      var _cart = this.cart.getCart();
      return _cart;
    })
  }

  isEmpty():boolean{
    return this.cart.orderCount == 0
  }

  isAddCourse(course_key:string){
    
    if(this.cart.isAdd(course_key) )
      return true;
    else
      return false;
  }

  getCart() {
    return this.cart.getCart();
  }

  getTotal() {
    return this.cart.getTotal();
  }

  saveCart() {
    localStorage[LOCAL_STORAGE_NAME] = this.cart.toString()
  }

  addCourseToCart(course, class_group){
    var key = course.$key;
    var item = new CartItem(course.name, class_group.price, 1, key )
    item.reference = class_group.$key
    if(!this.cart.isAdd(key))
      this.cart.add(item)
    this.saveCart()
  }

  removeCourseFromCart(cart_key) {
    this.cart.remove(cart_key)
    this.saveCart()
  }

  clearCart(){
    this.cart = new Cart();
    this.saveCart();
  }


}
