import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Car } from '../shared/car.model';
import { DeleteCar } from '../store/cars/cars.actions';
import { selectCars } from '../store/cars/cars.selectors';
import { StoreState } from '../store/store.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: [ './car-list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarListComponent implements OnInit {

  public readonly cars$: Observable<Car[]> = this.store.select(
    selectCars
  );

  constructor(private store: Store<StoreState>) {
  }

  ngOnInit(): void {
  }

  public deleteCar(carId: string): void {
    this.store.dispatch(new DeleteCar(carId));
  }

}
