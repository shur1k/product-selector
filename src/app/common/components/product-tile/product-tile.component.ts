import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Product } from './model';
export { Product};

@Component({
  selector: 'ps-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProductTileComponent),
      multi: true,
    },
  ],
})
export class ProductTileComponent implements ControlValueAccessor {
  @Input() public product: Product;
  @Output() public value = new EventEmitter<Product>();

  public isInfoHivered = false;
  
  private changeCallback?: () => void;
  private touchedCallback?: () => void;

  public writeValue(product: Product) {
    this.product = product;
  }

  public registerOnChange(fn: () => void) {
    this.changeCallback = fn;
  }

  public registerOnTouched(fn: () => void) {
    this.touchedCallback = fn;
  }

  public setTouched() {
    if (this.touchedCallback) {
      this.touchedCallback();
    }
  }

}
