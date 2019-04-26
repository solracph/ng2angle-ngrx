import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Source } from '../models/source';
import { map } from 'rxjs/operators';
import { Outcome } from '../models/outcome';
import { Reason } from '../models/reasons';

@Injectable()
export class ProspectTrackingService {

  constructor(private _http: HttpClient) { }

  getSources(): Observable<Source[]> {
    return this._http.get<any>(`${environment.apiUrl}sources.json`);
  }

  getOutcomes(): Observable<Outcome[]> {
    return this._http.get<any>(`${environment.apiUrl}outcomes.json`);
  }

  getReasons(): Observable<Reason[]> {
    return this._http.get<any>(`${environment.apiUrl}reasons.json`);
  }

  getPlans(): Observable<any> {
    return this._http.get<any>(`${environment.apiUrl}plans.json`);
  }
}
