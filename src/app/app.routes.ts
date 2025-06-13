import { Routes } from '@angular/router';

import { routes as userRoutes } from './users/users.routes';
import {
  resolveUserName,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';

import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '', // <your-domain>/
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId', // <your-domain>/users/<uid>
    component: UserTasksComponent,
    children: userRoutes,
    data: {
      message: 'Hello!',
    },
    resolve: {
      userName: resolveUserName,
    },
  },
  {
    path: '**', // <your-domain>/anything-else
    component: NotFoundComponent,
  },
];
