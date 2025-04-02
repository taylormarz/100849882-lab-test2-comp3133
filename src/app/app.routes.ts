import { Routes } from '@angular/router';
import { MissionListComponent } from './mission-list/mission-list.component';

export const routes: Routes = [
	{ path: '', redirectTo: '/missions', pathMatch: 'full' },
	{ path: 'missions', component: MissionListComponent },
];
