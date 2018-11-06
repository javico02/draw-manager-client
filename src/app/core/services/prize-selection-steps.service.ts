import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { PrizeSelectionStep } from '../models/prize-selection-step.model';
import { map } from 'rxjs/operators';

@Injectable()
export class PrizeSelectionStepsService {

    constructor(
        private apiService: ApiService
    ) { }

    selectWinner(prizeId: number): Observable<PrizeSelectionStep> {
        return this.apiService
            .post(`/prizes/${prizeId}/prizeSelectionSteps`)
            .pipe(map(prizeSelectionStep => prizeSelectionStep));
    }
}
