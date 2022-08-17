import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  valid:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  validator(){
    this.valid=!this.valid;
  }

}
