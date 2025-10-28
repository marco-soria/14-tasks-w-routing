import { Component, inject } from '@angular/core';

import { UserComponent } from './user/user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: './users.html',
  styleUrl: './users.css',
  imports: [UserComponent],
})
export class UsersComponent {
  private usersService = inject(UsersService);
  users = this.usersService.users;
}
