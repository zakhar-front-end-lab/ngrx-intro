import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, OnInitEffects } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { exhaustMap, map, switchMap, switchMapTo, withLatestFrom } from 'rxjs/operators';
import { Car } from '../../shared/car.model';
import { StoreState } from '../store.model';
import { AddCar, LoadCars, LoadCarsSuccess, UpdateCarsOnServer } from './cars.actions';
import { CarsActionType } from './cars.model';
import { selectCars } from './cars.selectors';
import { CarsService } from './cars.service';

@Injectable()
export class CarsEffects implements OnInitEffects {
  @Effect()
  public loadCars$: Observable<LoadCarsSuccess> = this.actions$.pipe(
    ofType(CarsActionType.LoadCars),
    exhaustMap(() => this.carsService.getCars()),
    map((cars: Car[]) => new LoadCarsSuccess(cars))
  );

  @Effect()
  public runUpdateCarsOnAddCar$: Observable<UpdateCarsOnServer> = this.actions$.pipe(
    ofType(CarsActionType.AddCar),
    withLatestFrom(this.store.select(selectCars)),
    map(([, cars]: [AddCar, Car[]]) => new UpdateCarsOnServer(cars))
  );

  @Effect()
  public updateCars$: Observable<void> = this.actions$.pipe(
    ofType(CarsActionType.UpdateCarsOnServer),
    switchMap((action: UpdateCarsOnServer) => {
      return this.carsService.updateCars(action.cars);
    }),
    switchMapTo(EMPTY)
  );

  constructor(
    private store: Store<StoreState>,
    private actions$: Actions,
    private carsService: CarsService
  ) {
  }

  public ngrxOnInitEffects(): LoadCars {
    return new LoadCars();
  }
}
