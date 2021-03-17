import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddCar } from '../store/cars/cars.actions';

@Component({
  selector: 'app-car-creation-form',
  templateUrl: './car-creation-form.component.html',
  styleUrls: [ './car-creation-form.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarCreationFormComponent implements OnInit {
  public readonly carForm: FormGroup = new FormGroup({
    brand: new FormControl(''),
    model: new FormControl(''),
    year: new FormControl(null),
    imageUrl: new FormControl('')
  });

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  public addCar(): void {
    this.store.dispatch(new AddCar({
      id: Date.now().toString(),
      ...this.carForm.value
    }));

    this.carForm.reset();
  }

}
