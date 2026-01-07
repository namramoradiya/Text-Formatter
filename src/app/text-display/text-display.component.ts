import { Component } from '@angular/core';
import {HomeComponent} from '../home/home.component';
import {FormattersComponent} from '../formatters/formatters.component'
@Component({
  selector: 'app-text-display',
  standalone: true,
  imports: [HomeComponent,FormattersComponent],
  templateUrl: './text-display.component.html',
  styleUrl: './text-display.component.css'
})
export class TextDisplayComponent {

}
