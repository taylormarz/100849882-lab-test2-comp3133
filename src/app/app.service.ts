import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MissionService {
  private http = inject(HttpClient);
  private API_URL = 'https://api.spacexdata.com/v3/launches';

  getMissions(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL);
  }

  getMissionsByYear(year: string): Observable<any[]> {
    const url = `${this.API_URL}?launch_year=${year}`;
    return this.http.get<any[]>(url);
  }
}