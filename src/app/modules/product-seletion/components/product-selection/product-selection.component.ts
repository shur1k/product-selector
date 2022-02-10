import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ps-product-selection',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSelectionComponent {}
