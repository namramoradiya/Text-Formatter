import { Component } from '@angular/core';
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

}
