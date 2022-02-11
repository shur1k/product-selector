import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductSelectionComponent } from './components';
import { ExpansionPanelModule, ProductTileModule } from 'src/app/common';

@NgModule({
  declarations: [ProductSelectionComponent],
  imports: [CommonModule, ExpansionPanelModule, ProductTileModule, ReactiveFormsModule,],
  exports: [ProductSelectionComponent]
})
export class ProductSeletionModule { }
