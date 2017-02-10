import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-items-near-me',
  templateUrl: './items-near-me.component.html',
  styleUrls: ['./items-near-me.component.css']
})
export class ItemsNearMeComponent implements OnInit {
  longitude: number;
  latitude: number;
  items: any;

  constructor(private db: DataService) { }
  
  getItemsNearMe(lati, longi) {
   this.db.getItemsNearMe(lati, longi).subscribe(res => { this.items = res.json();});

  }

  nearMe() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;


        this.getItemsNearMe(this.longitude, this.latitude);
      }
    )
  };



  ngOnInit() {


    this.nearMe();

  }



}
