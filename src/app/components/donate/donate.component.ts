import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-donate', //donator
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {


  states: any;
  cities: any;
  donateflag: string = "true";
  donateForm: FormGroup;
  userThingy;
  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.donateForm = fb.group({
      'itemName': ['', Validators.required],
      'shortDescription': ['', Validators.required],
      'itemDetails': ['', Validators.required],
      'category': ['', Validators.required],
      'state': ['', Validators.required],
      'city': ['', Validators.required],
      'name': ['', Validators.required],
      'contactInformation': ['', [Validators.required,
      Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]]
    });
  }
  save() {
    console.log('submitting');
    let formData = this.donateForm.value;
    this.dataService.savedata(this.donateForm.value);
    alert("Saved Successful");
    console.log(formData)
  }
  getData() {
    console.log('getting data');


  }
  cityflag: string;

  selectItem(event: Event) {
    //this.select.emit(value);

    const value1: string = (<HTMLSelectElement>event.srcElement).value;
    console.log(value1);
    this.cityflag = 'true';
  }


  getCities(state: string) {
    this.dataService.getAllcityByState(state, function (data: any) {
      this.cities = data.json();
    }.bind(this));
  }



  ngOnInit() {
    this.dataService.getAllStates(function (data: any) {
      this.states = data.json();
    }.bind(this));

  }
}

