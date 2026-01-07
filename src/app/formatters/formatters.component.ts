import { Component } from '@angular/core';
import {HomeComponent} from '../home/home.component';
import {TextDisplayComponent} from '../text-display/text-display.component'
@Component({
  selector: 'app-formatters',
  standalone: true,
  imports: [HomeComponent,TextDisplayComponent],
  templateUrl: './formatters.component.html',
  styleUrl: './formatters.component.css'
})
export class FormattersComponent {

}
