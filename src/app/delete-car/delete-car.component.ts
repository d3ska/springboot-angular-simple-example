import { Component, OnInit } from '@angular/core';
import {CarService} from '../car.service';
import {Car} from '../car';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent implements OnInit {

  public car = {} as Car;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
  }

  public delete(): void{
    this.carService.delete(this.car.id);
  }

}
