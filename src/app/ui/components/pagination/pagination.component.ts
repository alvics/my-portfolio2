import { Component, OnInit } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  currentUrl: string;

  constructor() {
   
  }
  

  ngOnInit() {}
}
