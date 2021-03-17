import { createSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { Car } from '../../shared/car.model';
import { StoreState } from '../store.model';

interface CarsProps {
  brand: string;
  year: number;
}

export const selectCars = (state: StoreState) => state.cars;

export const selectCarsByName: MemoizedSelectorWithProps<StoreState, CarsProps, Car[]> = createSelector(
  selectCars,
  (cars: Car[], props: CarsProps) => {
    return cars.filter((car: Car) => car.brand === props.brand && car.year === props.year);
  }
);
