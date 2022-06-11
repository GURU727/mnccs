import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-camper',
  //template:'<h2>{{ title }}</h2>',
  templateUrl: './add-camper.component.html',
  styleUrls: ['./add-camper.component.scss']
})
export class AddCamperComponent implements OnInit {
    title ="Add Camper";
  constructor() { }

  getTitle() {
    return this.title;
  }
  

  ngOnInit(): void {
  }

}
