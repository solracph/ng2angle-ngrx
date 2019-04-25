import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProspectTrackingService {

  constructor(private _http: HttpClient) { }

  getSources(): Observable<any> {
    return this._http.get<any>(`${environment.apiUrl}sources.json`);
  }

  getOutcomes(): Observable<any> {
    return this._http.get<any>(`${environment.apiUrl}outcomes.json`);
  }

  getReasons(): Observable<any> {
    return this._http.get<any>(`${environment.apiUrl}reasons.json`);
  }
}
