import {  Action } from '@ngrx/store';
import { ProspectiveMember } from '../models';


export enum ActionTypes {
  AddMember = '[Prospect Tracking Page] Add Member'
}

export class AddMember implements Action {
    readonly type = ActionTypes.AddMember;

    constructor(public payload:  ProspectiveMember ) {
    }
}

export type Actions = AddMember;