import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit { 
  color = 'yellow';
  constructor() { }

  ngOnInit(): void {
  }

  modifier(couleur){
      this.color = couleur;

  }
  reset(){
      this.color = 'black';
  }

}
