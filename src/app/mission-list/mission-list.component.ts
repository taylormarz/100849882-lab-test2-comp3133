import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionService } from './mission.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-mission-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent {
  private missionService = inject(MissionService);
  missionsList$ = this.missionService.getMissions();
}
