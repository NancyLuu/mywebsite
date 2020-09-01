import { Component, OnInit } from '@angular/core';
import { flatten } from '@angular/compiler';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  oa: boolean;
  nuwa: boolean;
  thitcamp: boolean;
  mathcamp: boolean;
  lili: boolean;
  npumis: boolean;
  constructor() {
     this.oa = false;
     this.nuwa = false;
     this.thitcamp = false;
     this.mathcamp = false;
     this.lili = false;
     this.npumis = false;
  }

  ngOnInit(): void {
  }

}
