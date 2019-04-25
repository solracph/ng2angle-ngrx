import { ProspectiveMembersState, initialProspectiveMembersState } from '../states/prospective-members.state';
import {  Actions, ActionTypes } from '../actions/prospect-members-api.action';

export const prospectiveMembersStateReducers = (
    state = initialProspectiveMembersState,
    action: Actions
): ProspectiveMembersState => {
    switch (action.type) {
        case ActionTypes.GetMembersSuccess: {
            return {
                ...state,
                members: action.payload
              };
        }
        default:
            return state;
    }
}