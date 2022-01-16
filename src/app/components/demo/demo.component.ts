import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  title = 'angularproyect';

  names =['Juan', 'Pedro', 'Oscar']

  addName(name: string): void{
    this.names.push(name);
  }

  deleteName(index: number): void{
    this.names.splice(index, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
