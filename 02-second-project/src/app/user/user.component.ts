import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath(){
    return `assets/users/${this.avatar}`;
  }

  onSelectUser(){}
}
