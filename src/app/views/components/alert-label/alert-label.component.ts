import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-label',
  templateUrl: './alert-label.component.html',
  styleUrls: ['./alert-label.component.css'],
})
export class AlertLabelComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
