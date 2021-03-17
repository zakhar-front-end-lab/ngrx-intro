import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from '../../shared/car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: [ './car.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarComponent implements OnInit {
  @Input() public car!: Car;

  @Output() public delete: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
