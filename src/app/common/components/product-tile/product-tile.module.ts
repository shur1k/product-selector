import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductTileComponent } from './product-tile.component';



@NgModule({
  declarations: [ProductTileComponent],
  imports: [CommonModule, NgbModule],
  exports: [ProductTileComponent]
})
export class ProductTileModule { }
