import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Images } from '../models/placeholder.model';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private http: HttpClient) { }
  public getPhotos(): Observable<Images> {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos`);
  }
}
