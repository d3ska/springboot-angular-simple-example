import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarListComponent} from './car-list/car-list.component';
import {AddCarComponent} from './add-car/add-car.component';
import {UpdateCarComponent} from './update-car/update-car.component';
import {DeleteCarComponent} from './delete-car/delete-car.component';



const routes: Routes = [
  { path: '', redirectTo: '/car-list', pathMatch: 'full' },
  {
    path: 'all',
    component: CarListComponent
  },
  {
    path: 'car-add',
    component: AddCarComponent
  },
  {
    path: 'car-edit',
    component: UpdateCarComponent
  },
  {
    path: 'car-delete',
    component: DeleteCarComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
