import { Component, OnInit } from "@angular/core";
import { ITraining } from "src/app/shared/models/formation.model";

@Component({
  selector: 'formation-list',
  templateUrl:'formation-list.component.html'
})
export class FormationsList implements OnInit {
   trainings = [{
    name: 'angular',
    startDate: '13/02/2023',
    endDate: '22/02/2023',
    time: '7am',
    location: {
      address: 'Rue de abdelkrim alkhatabi', city: 'la defense', country:
        'France'
    }}, {
    name: 'react',
    startDate: '13/02/2023',
    endDate: '22/02/2023',
    time: '6am',
    location: {
      address: 'Rue de abdelkrim alkhatabi', city: 'la defense', country:
        'France'
      }
    }];
  //S O L I D --> SINGLE RESP PRINC
  filtredTraining : any = [];
 
  ngOnInit(): void {
    this.filtredTraining = this.trainings;
  }

  champFilter = 'angular';
  
   
}