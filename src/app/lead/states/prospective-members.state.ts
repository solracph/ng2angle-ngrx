import { ProspectiveMember } from '../models' ;

export interface ProspectiveMembersState {
    members: ProspectiveMember[];
    selectedMember: ProspectiveMember
}

export const initialProspectiveMembersState : ProspectiveMembersState = {
    members: [],
    selectedMember: null
}