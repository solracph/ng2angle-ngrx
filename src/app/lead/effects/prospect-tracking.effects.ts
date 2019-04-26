import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of, pipe } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { LeadState } from '../states';

import {
    GetSources,
    GetSourcesSuccess,
    GetSourcesFail,
    GetOutcomes,
    GetOutcomesSuccess,
    GetReasons,
    GetReasonsSuccess,
    GetReasonsFail,
    GetPlans,
    GetPlansSuccess,
    GetOutcomesFail,
    ActionTypes
} from '../actions/prospect-tracking-api.action';
import { ProspectTrackingService } from '../services/prospect-tracking.service';
import { Source, Outcome } from '../models';

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
      switchMap(() => this.prospectTrackingService.getSources()
        .pipe(
          map((sources: Source[]) => new GetSourcesSuccess(sources)),
          catchError(error => of(new GetSourcesFail(error)))
        )
      ),
    );

    @Effect()
    getOutcomes$ = this.actions$.pipe(
      ofType<GetOutcomes>(ActionTypes.GetOutcomes),
      switchMap(() => this.prospectTrackingService.getOutcomes()
        .pipe(
          map((outcome: Outcome[]) => new GetOutcomesSuccess(outcome)),
          catchError(error => of(new GetOutcomesFail(error)))
        )
      ),
    );

    @Effect()
    getReasons$ = this.actions$.pipe(
      ofType<GetReasons>(ActionTypes.GetReasons),
      switchMap(() => this.prospectTrackingService.getReasons()
        .pipe(
          map((outcome: Outcome[]) => new GetReasonsSuccess(outcome)),
          catchError(error => of(new GetReasonsFail(error)))
        )
      ),
    );

    @Effect()
    getPlans$ = this.actions$.pipe(
      ofType<GetPlans>(ActionTypes.GetPlans),
      switchMap(() => this.prospectTrackingService.getPlans()),
      switchMap((response: any) => of(new GetPlansSuccess(response.plans)))
    );
}