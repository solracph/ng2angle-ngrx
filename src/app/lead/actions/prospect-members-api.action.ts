import {  Action } from '@ngrx/store';
import { ProspectiveMember } from '../models/prospective-member';


export enum ActionTypes {
    GetMembers = '[Prospect Members/API] Get Members',
    GetMembersSuccess = '[Prospect Members/API] Get Members Success'
}

export class GetMembers implements Action {
    readonly type = ActionTypes.GetMembers;
}

export class GetMembersSuccess implements Action {
    readonly type = ActionTypes.GetMembersSuccess;
    constructor(public payload: ProspectiveMember[] ){}
}

export type Actions = GetMembers | GetMembersSuccess;