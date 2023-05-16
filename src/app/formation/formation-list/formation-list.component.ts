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
    time: '6am',
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
  
  filtredTraining : any = [];

  fct() {
    this.filtredTraining = this.trainings.filter(f => f.name == 'angular');
  }
  ngOnInit(): void {
    this.filtredTraining = this.trainings;
  }

  _champFilter = '';
  
  public set champFilter(v: string) {
    this.filtredTraining = this.trainings.filter((f:any)=>f.name.startWith(v))
    this._champFilter = v;
  }
  
  public get champFilter() : string {
      return this._champFilter
  }
  
}