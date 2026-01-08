import { Component , Input } from '@angular/core';
import {TextDisplayComponent} from '../text-display/text-display.component'
import {FormattersComponent} from '../formatters/formatters.component'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormattersComponent,TextDisplayComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

   inputText: string = '';
   outputText: string = '';

  reverseText() {
    this.outputText = this.inputText.split('').reverse().join('');
  }

  clearText()
  {
    this.inputText = '';
    this.outputText = '';
  }

  removeWhiteSpace()
  {
    this.outputText = this.inputText.trim().replace(/\s+/g, '');
  }

  removeSpecialCharacters()
  {
    this.outputText = this.inputText.replace(/[^\w\s]/gi, '');
  }
}