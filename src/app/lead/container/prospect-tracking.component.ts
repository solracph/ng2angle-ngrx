import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { AddMember } from '../actions/prospect-tracking-page.action';
import { AppState } from '../../reducers';
import { GetSources, GetOutcomes, GetReasons, GetPlans } from '../actions/prospect-tracking-api.action';

@Component({
    templateUrl: './prospect-tracking.component.html'
  })
  export class ProspectTrackingComponent implements OnInit {
    
    constructor(private _store: Store<AppState>){
    }
    
    ngOnInit() {
      this._store.dispatch(new GetSources());
      this._store.dispatch(new GetOutcomes());
      this._store.dispatch(new GetReasons());
      this._store.dispatch(new GetPlans());

    }
  }