import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searched-items',
  templateUrl: './searched-items.component.html',
  styleUrls: ['./searched-items.component.css']
})
export class SearchedItemsComponent implements OnInit {

  constructor(private router: ActivatedRoute) { 
    console.log(JSON.stringify('From Search' + router));
  }

  ngOnInit() {
  
  }

}
