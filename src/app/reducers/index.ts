import { RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { LeadState } from '../lead/states';
import { leadReducers } from '../lead/reducers';

export interface AppState {
  router?: RouterReducerState;
  lead: LeadState
}

export const AppReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  lead: leadReducers
};


