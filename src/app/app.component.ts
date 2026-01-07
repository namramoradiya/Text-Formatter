import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { TextDisplayComponent } from '../text-display/text-display.component';
import {HomeComponent} from './home/home.component';
import {TextDisplayComponent} from './text-display/text-display.component'
import {FormattersComponent} from './formatters/formatters.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,TextDisplayComponent,FormattersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Text-Formatter';
}
