import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ps-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpansionPanelComponent {
@Input() title = '';

}
