import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MissionService {
  private http = inject(HttpClient);

  getMissions(): Observable<any[]> {
    return this.http.get<any[]>('https://api.spacexdata.com/v3/launches');
  }
}
