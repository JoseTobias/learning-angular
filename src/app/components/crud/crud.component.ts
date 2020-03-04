import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Images } from 'src/app/models/placeholder.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  images: any;
  error: any;
  constructor(private crudService: CrudService) {
    this.getter();
  }

  ngOnInit(): void {
  }

  getter() {
    this.crudService.getPhotos().subscribe(
      (data: Images) => {
        this.images = data;
      }, (error: any) => {
        this.error = error;
      })
  }

}
