export enum PrizeSelectionStepType {
    Loser = 0,
    Winner = 1
}

export interface PrizeSelectionStep {
    prizeId: number;
    entrantId: number;
    drawEntryId: number;
    registeredOn: Date;
    prizeSelectionStepType: PrizeSelectionStepType;
    entrantCode: string;
    entrantName: string;
    entrantSubsidiary: string;
    entrantOffice: string;
    entrantUnit: string;
    entrantDepartment: string;
    entrantSubDepartment: string;
    entrantRegion: string;
    entrantCity: string;
    entrantBranchOffice: string;
}
