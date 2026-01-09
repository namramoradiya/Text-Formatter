import { Component, EventEmitter, Output , Input } from '@angular/core';
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
  @Output() whiteSpaceRemoveClicked = new EventEmitter<void>();
  @Output() removeSpecialCharClicked = new EventEmitter<void>();
  @Input() wordCount: number = 0;
  @Input() charCount: number = 0;

  onReverse() {
    this.reverseClicked.emit(); 
}  

  onClear()
  {
    this.clearClicked.emit();
  }

  onWhiteSpaceRemove()
  {
    this.whiteSpaceRemoveClicked.emit();
  }

  onRemoveSpecialChar()
  {
    this.removeSpecialCharClicked.emit();
  }
  

}

