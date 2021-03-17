import { Action } from '@ngrx/store';
import { Car } from '../../shared/car.model';

export enum CarsActionType {
  UpdateCarsOnServer = '[Cars] Update Cars on Server',
  LoadCars = '[Cars] Load Cars',
  LoadCarsSuccess = '[Cars] Load Cars Success',
  AddCar = '[Cars] Add Car',
  DeleteCar = '[Cars] Delete Car'
}

export interface CarsAction extends Action {
  type: CarsActionType;

  car?: Car;
  carId?: string;
  cars?: Car[];
}
