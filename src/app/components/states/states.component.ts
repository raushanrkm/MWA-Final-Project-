import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  states: any;
  constructor(private dbService: DataService) { }

  getState() {
    this.dbService.getStates().subscribe(res => { this.states = res.json(); console.log(res) });
  }
  ngOnInit() {
    this.getState();
  }

}
