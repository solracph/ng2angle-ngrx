import { Action } from '@ngrx/store';
import { Source, Outcome, Reason, Plans } from '../models';

export enum ActionTypes {
    GetSources = '[Prospect Tracking/API] Get Sources',
    GetSourcesSuccess = '[Prospect Tracking/API] Get Sources Success',
    GetSourcesFail = '[Prospect Tracking/API] Get Sources Fail',

    GetOutcomes = '[Prospect Tracking/API] Get Outcomes',
    GetOutcomesSuccess = '[Prospect Tracking/API] Get Outcomes Success',
    GetOutcomesFail = '[Prospect Tracking/API] Get Outcomes Fail',
    
    GetReasons = '[Prospect Tracking/API] Get Reasons',
    GetReasonsSuccess = '[Prospect Tracking/API] Get Reasons Success',
    GetReasonsFail = '[Prospect Tracking/API] Get Reasons Fail',

    GetPlans = '[Prospect Tracking/API] Get Plans',
    GetPlansSuccess = '[Prospect Tracking/API] Get Plans Success'
    
}

export class GetSources implements Action {
    readonly type = ActionTypes.GetSources;
}

export class GetSourcesSuccess implements Action {
    readonly type = ActionTypes.GetSourcesSuccess;
    constructor(public payload: Source[] ){}
}

export class GetSourcesFail implements Action {
    readonly type = ActionTypes.GetSourcesFail;
    constructor(public payload: any ){}
}

export class GetOutcomes implements Action {
    readonly type = ActionTypes.GetOutcomes;
}

export class GetOutcomesSuccess implements Action {
    readonly type = ActionTypes.GetOutcomesSuccess;
    constructor(public payload: Outcome[] ){}
}

export class GetOutcomesFail implements Action {
    readonly type = ActionTypes.GetOutcomesFail;
    constructor(public payload: any ){}
}

export class GetReasons implements Action {
    readonly type = ActionTypes.GetReasons;
}

export class GetReasonsSuccess implements Action {
    readonly type = ActionTypes.GetReasonsSuccess;
    constructor(public payload: Reason[] ){}
}

export class GetReasonsFail implements Action {
    readonly type = ActionTypes.GetReasonsFail;
    constructor(public payload: any ){}
}

export class GetPlans implements Action{
    readonly type = ActionTypes.GetPlans;
}

export class GetPlansSuccess implements Action{
    readonly type = ActionTypes.GetPlansSuccess;
    constructor(public payload: Plans[] ) {}
}


export type Actions = 
| GetSources
| GetSourcesSuccess
| GetSourcesFail
| GetOutcomes
| GetOutcomesSuccess
| GetOutcomesFail
| GetReasons 
| GetReasonsSuccess 
| GetReasonsFail
| GetPlans 
| GetPlansSuccess;

