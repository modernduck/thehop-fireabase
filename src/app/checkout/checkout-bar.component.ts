import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart.service"
import { Router } from "@angular/router"

@Component({
  moduleId: module.id,
  selector: 'checkout-bar',
  template: `
     <div class="checkout-bar">
        <a *ngIf="isShow" class="pull-right btn btn-primary" routerLink="/checkout">Check Out</a>
    </div>
  `,
  styleUrls: ['checkout.component.css']
})
export class CheckoutBarComponent implements OnInit {
  private cart
  private isShow = true;
  
  constructor(private cartService:CartService, private router:Router) {
      this.router.events.subscribe(change=>{
          if(change.url != "/checkout")
            this.isShow = true;
          else
            this.isShow = false;
      })    

   }

  ngOnInit() {
    
    
  }


}
