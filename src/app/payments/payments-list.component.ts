import { Component, OnInit } from '@angular/core';
import { PaymentTransaction } from "../model/payment-transaction"
import { PaymentService } from "../payment.service"
import { ActivatedRoute, Params } from "@angular/router"
@Component({
  moduleId: module.id,
  selector: 'payments-list',
  template: `
  
   Payment Transaction Status <select (ngModelChange)="loadData($event)" [(ngModel)]="current_show_status">
        <option value="completed">Completed</option>
        <option value="uploaded">Uploaded</option>
        <option value="denied">Denied</option>
    </select>
    <table class="table">
      <thead>
        <th>#</th>
        <th></th>
      </thead>
      <tbody>
        <tr *ngFor="let item of display_payments">
          <td>{{item.$value | date}}</td>
          <td><a routerLink="{{item.$key}}/{{item.$value}}" class="btn btn-success">View</a></td>
        </tr>
      </tbody>
    </table>
  `,
  styleUrls: ['payments.component.css']
})
export class PaymentsListComponent implements OnInit {
  private current_show_status = "uploaded"
  constructor(private paymentService:PaymentService) { }
  private display_payments;



  loadData(event?:any){
      if(!event)
        event = this.current_show_status
      //  console.log(event)
      //console.log('load data')
      console.log(event)
      this.paymentService.getAllPaymentTransaction(event).subscribe(data=>{
        console.log('load data')
        console.log(data)
          this.display_payments = data;
      })
  }

getViewItem(payment_status_item){
    return PaymentTransaction.getDataFromListItem(payment_status_item)
  }


  ngOnInit(){
    
      this.loadData();
  }

}