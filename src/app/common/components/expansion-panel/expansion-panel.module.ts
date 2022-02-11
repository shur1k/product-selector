import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpansionPanelComponent } from './expansion-panel.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [ExpansionPanelComponent],
  imports: [CommonModule, MatExpansionModule],
  exports: [ExpansionPanelComponent]
})
export class ExpansionPanelModule { }
