import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input({required: true}) user!: {
    id: string;
    name: string;
    avatar: string;
  };
  @Output() select  = new EventEmitter();

  get imagePath(){
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
