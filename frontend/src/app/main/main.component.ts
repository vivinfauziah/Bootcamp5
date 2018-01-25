import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  file : File;
  collectionList = [];

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
  }

  loadCollectionList(){
    
    let header = new Headers()
    let options = new RequestOptions({ headers : header })
    
        this.http.get("http://localhost:3000/api/women", options)
        .subscribe(
          result => {
            this.collectionList = result.json();
          },
          error => {
            
          }
        );
      }
    
      fileChange($event){
        this.file = $event.target.files[0];
      }
    
}
