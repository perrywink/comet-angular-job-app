import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {JobDetailsComponent} from './job-details/job-details.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home',
    },
    {
      path: 'details/:id',
      component: JobDetailsComponent,
      title: 'Job details',
    },
  ];
  export default routeConfig;