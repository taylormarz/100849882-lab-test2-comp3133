import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mission-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent {
  missionsList$;
  constructor(public http: HttpClient){
    this.missionsList$ = this.http.get<any[]>('https://api.spacexdata.com/v3/launches');
  }
}