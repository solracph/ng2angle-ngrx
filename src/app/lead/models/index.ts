export  interface Outcome {
    id: number;
    description: string;
}

export  interface Plans {
    id: number;
    description: string;
}

export interface ProspectiveMember {
    firstName: string;
    lastName: string;
    source: string;
    outcome: string;
    email: string;
    address: string;
    reason: string;
    currentPlan: string;
    mbi: string;
    dob: string;
}

export interface Reason {
    id: number;
    description: string;
}

export  interface Source {
    id: number;
    description: string;
}