import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  state: string;
  private sub: Subscription;
  city: string;
  items: string;

  constructor(private route: ActivatedRoute, private db: DataService) { }

  getCities() {

    this.sub = this.route.parent.params.subscribe(params => {
            this.state = params["state"];
        });
    this.sub = this.route.params.subscribe(
      (params) => {
        console.log(params);
      
        this.city = params['city']
        this.db.getItemsFromCities(this.state, this.city).subscribe(res => { this.items = res.json() });

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
