import {
    combineReducers,
    Action,
  } from '@ngrx/store';

  import { LeadState } from '../states/index';
  import { prospectTrackingReducers } from './prospect-tracking.reducers';
  import { prospectiveMembersStateReducers } from './prospective-members.reducers';

export function leadReducers(state: LeadState | undefined, action: Action) {
    return combineReducers({
      prospectiveMembers : prospectiveMembersStateReducers,
      prospectTracking : prospectTrackingReducers
    })(state, action);
}