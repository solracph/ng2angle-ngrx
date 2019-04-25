import { ProspectiveMembersState, initialProspectiveMembersState } from './prospective-members.state';
import { ProspectTrackingState, initialProspectTrackingState } from './prospect-tracking.state';

export interface LeadState {
    prospectiveMembers : ProspectiveMembersState
    prospectTracking:  ProspectTrackingState
}

export const initialLeadState: LeadState = {
    prospectiveMembers: initialProspectiveMembersState,
    prospectTracking: initialProspectTrackingState
};
  