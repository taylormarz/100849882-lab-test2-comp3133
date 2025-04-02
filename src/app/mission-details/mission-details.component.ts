import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MissionService } from '../app.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.css']
})
export class MissionDetailsComponent {
  private route = inject(ActivatedRoute);
  private missionService = inject(MissionService);

  mission$ = this.route.paramMap.pipe(
    switchMap(params => {
      const id = params.get('id');
      return id ? this.missionService.getMissionByFlightNumber(+id) : of(null);
    })
  );

  goBack() {
    window.location.href = '/';
  }  
}