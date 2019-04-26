
import { ProspectiveMember } from '../models';
import { Source, Outcome, Reason, Plans } from '../models';

export interface ProspectTrackingState {
    newMember: ProspectiveMember
    sources: Source[],
    outcomes: Outcome[],
    reasons: Reason[],
    plans: Plans[]
}

export const initialProspectTrackingState: ProspectTrackingState = {
    newMember: null,
    sources: [],
    outcomes: [],
    reasons: [],
    plans: []
}
  