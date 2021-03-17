import { Car } from '../../shared/car.model';
import { CarsAction, CarsActionType } from './cars.model';

export function carsReducer(state: Car[] = [], action: CarsAction): Car[] {
  switch (action.type) {
    case CarsActionType.LoadCarsSuccess:
      return action.cars!;

    case CarsActionType.AddCar:
      return [...state, action.car!];

    case CarsActionType.DeleteCar:
      return state.filter((car: Car) => car.id !== action.carId);

    default:
      return state;
  }
}
