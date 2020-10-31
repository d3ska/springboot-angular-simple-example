import { Component, OnInit } from '@angular/core';
import {CarService} from '../car.service';
import {Car} from '../car';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  public car = {} as Car;
  constructor(private carService: CarService) { }

  ngOnInit(): void {
  }

  public save(): void {
    this.carService.save(this.car).subscribe(() =>  this.car as  Car);
  }

}
