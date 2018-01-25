import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart : any
  total = 0
  constructor(private http : Http, private router : Router) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/api/cart")
    .subscribe(
      result => {
        for(var i=0;i<result.json().length;i++){
          this.cart = result.json()
          for(i=0;i<result.json().length;i++){
          this.total += (result.json()[i].price*result.json()[i].quantity)
        }
        }
      }
    )
  }
  }
