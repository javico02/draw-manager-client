export interface Draw {
    id: number;
    name: string;
    description: string;
    allowMultipleParticipations: boolean;
    programmedFor: Date;
    executedOn: Date;
    groupName: string;
    prizesQty: number;
    entriesQty: number;
    isCompleted: boolean;
}
