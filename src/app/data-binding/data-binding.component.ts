import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  name: string;
  age: number;

  constructor() { }

  ngOnInit(): void {
  }

  getName(s: string) {
    this.name = s
  }

  getAge(num: number) {
    this.age = num
  }

}
