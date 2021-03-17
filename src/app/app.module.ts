import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarCreationFormComponent } from './car-creation-form/car-creation-form.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarComponent } from './car-list/car/car.component';
import { CarsEffects } from './store/cars/cars.effects';
import { carsReducer } from './store/cars/cars.reducer';
import { CarsService } from './store/cars/cars.service';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarComponent,
    CarCreationFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    StoreModule.forRoot({
      cars: carsReducer
    } as any),
    EffectsModule.forRoot([CarsEffects]),
    StoreDevtoolsModule.instrument(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
