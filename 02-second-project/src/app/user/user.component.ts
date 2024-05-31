import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  users = DUMMY_USERS
}
