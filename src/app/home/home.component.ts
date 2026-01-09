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
   wordCount: number = 0;
   charCount: number = 0;

  reverseText() {
    this.outputText = this.inputText.split('').reverse().join('');
  }

  clearText()
  {
    this.inputText = '';
    this.outputText = '';
    this.wordCount = 0;
    this.charCount = 0;
  }

  removeWhiteSpace()
  {
    this.outputText = this.inputText.trim().replace(/\s+/g, '');
  }

  removeSpecialCharacters()
  {
    this.outputText = this.inputText.replace(/[^\w\s]/gi, '');
  }

  onTextChange(newText: string) {
   this.inputText = newText;
   this.calculateCounts();
  }
  
  calculateCounts() {
  const trimmed = this.inputText.trim();

  this.wordCount = trimmed
    ? trimmed.split(/\s+/).length
    : 0;

  this.charCount = this.inputText.length;
}

capitalizeWords()
{
  this.outputText = this.inputText.toUpperCase();
}
}