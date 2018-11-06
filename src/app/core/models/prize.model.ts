import { PrizeSelectionStep, PrizeSelectionStepType } from './prize-selection-step.model';

export interface Prize {
    id: number;
    name: string;
    description: string;
    attemptsUntilChooseWinner: number;
    executedOn: Date;
    drawId: number;
    delivered: boolean;
    selectionSteps: PrizeSelectionStep[];
}
