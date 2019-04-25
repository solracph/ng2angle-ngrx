import { ProspectiveMember } from '../models/prospective-member' ;

export interface ProspectiveMembersState {
    members: ProspectiveMember[];
    selectedMember: ProspectiveMember
}

export const initialProspectiveMembersState : ProspectiveMembersState = {
    members: [],
    selectedMember: null
}