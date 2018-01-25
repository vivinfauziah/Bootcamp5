import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  params
  detail

  constructor(private http : Http, private route : Router ) { }

  ngOnInit() {
    this.params
    .subscribe(
      result => {
        this.params = result["id"]
      }
    )
    this.http.get("http://localhost:3000/api/women/id"+this.params)
    .subscribe(
      result => {
        this.detail = result.json()
      },
      error => {
        console.log(error)
      }
    )
  }

  AddToCart(x){
    let form = new FormData()
    let option = new RequestOptions({headers:new Headers({})})
    form.append("ProductId",this.detail._id)
    form.append("ProductName",this.detail.name)
    form.append("Picture",this.detail.photo)
    form.append("Price",this.detail.price)
    
    this.http.post("http://localhost:3000/api/cart",form)
    .subscribe(
      result=>{
        location.reload()
      },
      error=>{
        console.log(error)
      }
    )
  }

}
