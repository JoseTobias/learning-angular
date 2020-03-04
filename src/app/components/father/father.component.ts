import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {
  @Output() info = "Name: Tobias";
  constructor() { }

  ngOnInit(): void {
  }

}
