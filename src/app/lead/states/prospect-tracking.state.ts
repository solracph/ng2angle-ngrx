
import { ProspectiveMember } from '../models/prospective-member';
import { Source } from '../models/source';
import { Outcome } from '../models/outcome';
import { Reason } from '../models/reasons';

export interface ProspectTrackingState {
    newMember: ProspectiveMember
    sources: Source[],
    outcomes: Outcome[],
    reasons: Reason[]
}

export const initialProspectTrackingState: ProspectTrackingState = {
    newMember: null,
    sources: [],
    outcomes: [],
    reasons: []
   
}
  