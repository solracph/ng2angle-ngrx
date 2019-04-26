import { ProspectTrackingState, initialProspectTrackingState } from '../states/prospect-tracking.state';
import {  Actions, ActionTypes } from '../actions/prospect-tracking-api.action';

export const prospectTrackingReducers = (
    state = initialProspectTrackingState,
    action: Actions
): ProspectTrackingState => {
    switch (action.type) {
        case ActionTypes.GetSourcesSuccess: {
            return {
                ...state,
                sources: action.payload
              };
        }
        case ActionTypes.GetOutcomesSuccess: {
            return {
                ...state,
                outcomes: action.payload
            };
        }
        case ActionTypes.GetReasonsSuccess: {
            return {
                ...state,
                reasons: action.payload
            };  
        }
        case ActionTypes.GetPlansSuccess: {
            return {
                ...state,
                plans: action.payload
            };  
        }
        default:
            return state;
    }
}