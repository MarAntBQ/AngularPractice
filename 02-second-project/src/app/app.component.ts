import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent], // Import Components inside
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = '02-second-project';
  developer = {
    name: 'Marco Antonio',
    website: 'https://marantbq.dev'
  };
}
