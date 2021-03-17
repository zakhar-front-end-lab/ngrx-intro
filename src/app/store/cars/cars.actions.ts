import { Car } from '../../shared/car.model';
import { CarsAction, CarsActionType } from './cars.model';

export class UpdateCarsOnServer implements CarsAction {
  public readonly type: CarsActionType.UpdateCarsOnServer = CarsActionType.UpdateCarsOnServer;

  constructor(public readonly cars: Car[]) {
  }
}

export class LoadCars implements CarsAction {
  public readonly type: CarsActionType.LoadCars = CarsActionType.LoadCars;
}

export class LoadCarsSuccess implements CarsAction {
  public readonly type: CarsActionType.LoadCarsSuccess = CarsActionType.LoadCarsSuccess;

  constructor(public readonly cars: Car[]) {
  }
}

export class AddCar implements CarsAction {
  public readonly type: CarsActionType.AddCar = CarsActionType.AddCar;

  constructor(public readonly car: Car) {
  }
}

export class DeleteCar implements CarsAction {
  public readonly type: CarsActionType.DeleteCar = CarsActionType.DeleteCar;

  constructor(public readonly carId: string) {
  }
}
