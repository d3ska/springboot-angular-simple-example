import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car} from './car';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})

@Injectable({providedIn: 'root'})
export class CarService {


  private CAR_API = 'http://localhost:8080/cars';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.CAR_API + '/all');
  }

  save(car: Car): Observable<any> {
    return this.http.post(this.CAR_API, car);
  }

  update(car: Car): void{
     this.http.put(this.CAR_API, car).subscribe(data => console.log(data));
  }

  delete(carId: number): void{
    const id = carId;
    const url = `${this.CAR_API}/delete/${id}`;
    this.http.delete(url).subscribe(data => console.log(data));
  }


}
