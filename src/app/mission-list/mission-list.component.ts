import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionService } from '../app.service';
import { inject } from '@angular/core';
import { MissionFilterComponent } from '../mission-filter/mission-filter.component';

@Component({
  selector: 'app-mission-list',
  standalone: true,
  imports: [CommonModule, MissionFilterComponent],
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent {
  private missionService = inject(MissionService);
  missionsList$ = this.missionService.getMissions();

  onYearSelected(year: string) {
    this.missionsList$ = year
      ? this.missionService.getMissionsByYear(year)
      : this.missionService.getMissions();
  }
}
