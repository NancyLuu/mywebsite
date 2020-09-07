import { Component, OnInit } from '@angular/core';
import Data from '../data/portfolioData.json';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  
  data_ = Data;

  constructor() {
  }

  ngOnInit(): void {
  }

  findTag(tag: any) {
    var arr = [];
    console.log(Data);
    for (var d in Data) {
      console.log(Data[d].tag);
      if (tag == Data[d].tag) {
        arr.push(Data[d]);
      }
    }
    console.log(arr);
    this.data_ = arr;
  }

  findAll() {
    this.data_ = Data;

  }

}
