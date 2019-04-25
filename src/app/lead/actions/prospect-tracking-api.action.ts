import {  Action } from '@ngrx/store';
import { Source } from '../models/source';
import { Outcome } from '../models/outcome';
import { Reason } from '../models/reasons';

export enum ActionTypes {
    GetSources = '[Prospect Tracking/API] Get Sources',
    GetSourcesSuccess = '[Prospect Tracking/API] Get Sources Success',

    GetOutcomes = '[Prospect Tracking/API] Get Outcomes',
    GetOutcomesSuccess = '[Prospect Tracking/API] Get Outcomes Success',
    
    GetReasons = '[Prospect Tracking/API] Get Reasons',
    GetReasonsSuccess = '[Prospect Tracking/API] Get Reasons Success'
}

export class GetSources implements Action {
    readonly type = ActionTypes.GetSources;
}

export class GetSourcesSuccess implements Action {
    readonly type = ActionTypes.GetSourcesSuccess;
    constructor(public payload: Source[] ){}
}

export class GetOutcomes implements Action {
    readonly type = ActionTypes.GetOutcomes;
}

export class GetOutcomesSuccess implements Action {
    readonly type = ActionTypes.GetOutcomesSuccess;
    constructor(public payload: Outcome[] ){}
}

export class GetReasons implements Action {
    readonly type = ActionTypes.GetReasons;
}

export class GetReasonsSuccess implements Action {
    readonly type = ActionTypes.GetReasonsSuccess;
    constructor(public payload: Reason[] ){}
}

export type Actions = 
GetSources | 
GetSourcesSuccess | 
GetOutcomes | 
GetOutcomesSuccess |
GetReasons |
GetReasonsSuccess ;