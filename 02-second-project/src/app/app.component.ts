import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';

@Component({
    selector: 'app-root',
    standalone: true, // Import Components inside
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [HeaderComponent, UserComponent]
})

export class AppComponent {
  users = DUMMY_USERS;
}
