import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  state: string;
  private sub: Subscription;
  cities: any;

  constructor(private route: ActivatedRoute, private db: DataService) { }

  getCities() {
    this.sub = this.route.params.subscribe(
      (params) => {
        this.state = params['state'];
        this.db.getCitiesFromStates(this.state).subscribe(res=>{this.cities = res.json()});
       
      }
    )
  }


  ngOnInit() {
  
 this.getCities();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
