import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from './interface/mission.interface';

@Injectable({ providedIn: 'root' })
export class MissionService {
  private http = inject(HttpClient);
  private API_URL = 'https://api.spacexdata.com/v3/launches';

  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.API_URL);
  }
  
  getMissionsByYear(year: string): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.API_URL}?launch_year=${year}`);
  }
  
  getMissionByFlightNumber(flightNumber: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.API_URL}/${flightNumber}`);
  }  
}