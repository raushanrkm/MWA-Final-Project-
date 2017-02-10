import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class DataService {

  port: string = "http://localhost:3000/api";

  stateresult: any
  cityresult: any
  itemlist: any


  constructor(public http: Http) { }

  getMyData() {
    return this.http.get(this.port + '/getZipCodes');
  }

  getStates() {
    return this.http.get(this.port + '/getStates');
  }

  getCitiesFromStates(state) {
    console.log(this.port + '/getCitiesFromStates/' + state);
    return this.http.get(this.port + '/getCitiesFromStates/' + state);
  }

  getItemsNearMe(longitude, latitude) {
    console.log(this.port + '/getItemsNearMe?longitude=' + longitude + '&latitude=' + latitude);
    return this.http.get(this.port + '/getItemsNearMe?longitude=' + longitude + '&latitude=' + latitude);

  }

  searchItems(itemName, city, category) {
    console.log(this.port + '/searchItems?itemName=' + itemName + '&category=' + category + '&city=' + city);
    return this.http.get(this.port + '/searchItems?itemName=' + itemName + '&category=' + category + '&city=' + city);
  }
  getItemsFromCities(state, city) {
    console.log('Service called ' + this.port + '/getItemsFromCities/' + state + '/' + city);
    return this.http.get(this.port + '/getItemsFromCities/' + state + '/' + city);
  }
  savedata(data: any) {
    //console.log(data);
    navigator.geolocation.getCurrentPosition(
      position => {
        let location = [-91.96662, 41.02267]
        data.location = {
          coordinates: location
        }
        console.log()
        this.http.post('http://localhost:3000/api/saveItems', data).subscribe(
          console.log,
          console.log
        );
      }, Error => {
        this.http.post('http://localhost:3000/api/saveItems', data).subscribe(
          console.log,
          console.log
        );
      }
    );


  }

  getAllcityByState(state: string, cb): any {

    this.http.get('http://localhost:3000/api/getCitiesFromStates/' + state).subscribe((data: any) => {
      this.cityresult = data
      cb(this.cityresult);
      //       
    });
    return;
  }

  getAllStates(cb): any {

    this.http.get('http://localhost:3000/api/getStates').subscribe((data: any) => {
      this.stateresult = data
      cb(this.stateresult);
      //       
    });
    return;
  }

  getSearchedItems(itemName, category, city) {
   console.log(this.port + '/searchItems?itemName=' + itemName + '&category=' + category + '&city=' + city);
    return this.http.get(this.port + '/searchItems?itemName=' + itemName + '&category=' + category + '&city=' + city);
  }
}
