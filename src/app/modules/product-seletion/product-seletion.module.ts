import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

import { ProductSelectionComponent } from './components';

@NgModule({
  declarations: [ProductSelectionComponent],
  imports: [CommonModule, MatExpansionModule],
  exports: [ProductSelectionComponent]
})
export class ProductSeletionModule { }
