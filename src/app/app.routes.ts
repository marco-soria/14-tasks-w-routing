import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';

import { UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '', // <your-domain>/
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId', // <your-domain>/users/123
    component: UserTasksComponent,
    children: [
      {
        path: 'tasks', // <your-domain>/users/123/tasks
        component: TasksComponent,
      },
      {
        path: 'tasks/new', // <your-domain>/users/123/tasks/new
        component: NewTaskComponent,
      },
    ],
  },
  {
    path: '**', // <your-domain>/anything-else
    component: NotFoundComponent,
  },
];
