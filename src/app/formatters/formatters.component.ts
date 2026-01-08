import { Component, EventEmitter, Output } from '@angular/core';
// import {HomeComponent} from '../home/home.component';
// import {TextDisplayComponent} from '../text-display/text-display.component'
@Component({
  selector: 'app-formatters',
  standalone: true,
  imports: [],
  templateUrl: './formatters.component.html',
  styleUrls: ['./formatters.component.css']
})
export class FormattersComponent {

  @Output() reverseClicked = new EventEmitter<void>();
  @Output() clearClicked = new EventEmitter<void>();

  onReverse() {
    this.reverseClicked.emit(); 
}  

  onClear()
  {
    this.clearClicked.emit();
  }
}
