import { Component, OnInit } from '@angular/core';
import {Car} from '../car';
import {CarService} from '../car.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {

  public car = {} as Car;
  constructor(private carService: CarService) { }

  ngOnInit(): void {
  }

  public update(): void{
    this.carService.update(this.car);
  }
}
