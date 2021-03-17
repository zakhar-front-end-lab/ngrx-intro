import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../../shared/car.model';

@Injectable()
export class CarsService {
  constructor(private http: HttpClient) {
  }

  public getCars(): Observable<Car[]> {
    return this.http.get<Car[]>('/cars');
  }

  public updateCars(cars: Car[]): Observable<string> {
    return this.http.post('/cars', cars, { responseType: 'text' });
  }
}
