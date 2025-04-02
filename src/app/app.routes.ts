import { Routes } from '@angular/router';
import { MissionListComponent } from './mission-list/mission-list.component';
import { MissionDetailsComponent } from './mission-details/mission-details.component';

export const routes: Routes = [
	{ path: '', redirectTo: '/missions', pathMatch: 'full' },
	{ path: 'missions', component: MissionListComponent },
	{ path: 'missions/:id', component: MissionDetailsComponent }

];
