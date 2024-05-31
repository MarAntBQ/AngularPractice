import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";

@Component({
    selector: 'app-root',
    standalone: true, // Import Components inside
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [HeaderComponent, UserComponent]
})

export class AppComponent {
  title = '02-second-project';
  developer = {
    name: 'Marco Antonio',
    website: 'https://marantbq.dev'
  };
}
