import { Route } from '@angular/router';
import { BlogComponent } from './blog/blog.component';

export const APP_ROUTE: Route[] = [
  {
    path: '',
    component: BlogComponent,
    loadChildren: () => import('./blog/blog.route')     ,
  },
];
