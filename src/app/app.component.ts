import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Router } from "@angular/router";

import { AuthService } from './services/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  searchedItems;
  constructor(private db: DataService, private router: Router, private auth: AuthService) {

  }

  login() {
    this.auth.login();
  }
  
  logout() {

    this.auth.logout();
    this.router.navigate(['']);

  }
  searchName: string;
  searchCity: string;
  searchCategory: string;
  search() {
    console.log(this.searchName, this.searchCategory, this.searchCity);

    this.searchName = this.searchName === undefined ? '' : this.searchName;

    this.searchCategory = this.searchCategory === undefined ? '' : this.searchCategory;
    this.searchCity = this.searchCity === undefined ? '' : this.searchCity;

    console.log(this.searchName, this.searchCity, this.searchCategory);

    this.db.getSearchedItems(this.searchName, this.searchCategory, this.searchCity).subscribe(
      res => { this.searchedItems = res.json() }
    );


  }

}

