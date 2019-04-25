import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LeadState } from '../states';

import {
    GetSources,
    GetSourcesSuccess,
    GetOutcomes,
    GetOutcomesSuccess,
    GetReasons,
    GetReasonsSuccess,
    ActionTypes
} from '../actions/prospect-tracking-api.action';
import { ProspectTrackingService } from '../services/prospect-tracking.service';

@Injectable()
export class ProspectTrackingEffects {

    constructor(
        private prospectTrackingService: ProspectTrackingService,
        private actions$: Actions,
        private store: Store<LeadState>
      ) {}

    @Effect()
    getUsers$ = this.actions$.pipe(
      ofType<GetSources>(ActionTypes.GetSources),
      switchMap(() => this.prospectTrackingService.getSources()),
      switchMap((response: any) => of(new GetSourcesSuccess(response.sources)))
    );

    @Effect()
    getOutcomes$ = this.actions$.pipe(
      ofType<GetOutcomes>(ActionTypes.GetOutcomes),
      switchMap(() => this.prospectTrackingService.getOutcomes()),
      switchMap((response: any) => of(new GetOutcomesSuccess(response.outcomes)))
    );

    @Effect()
    getReasons$ = this.actions$.pipe(
      ofType<GetReasons>(ActionTypes.GetReasons),
      switchMap(() => this.prospectTrackingService.getReasons()),
      switchMap((response: any) => of(new GetReasonsSuccess(response.reasons)))
    );
}