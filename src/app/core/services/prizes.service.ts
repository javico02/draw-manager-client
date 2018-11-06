import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from './api.service';
import { Prize } from '../models';

@Injectable()
export class PrizesService {
    constructor(
        private apiService: ApiService) {
    }

    get(drawId: number, prizeId: number): Observable<Prize> {
        return this.apiService
            .get(`/draws/${drawId}/prizes/${prizeId}`)
            .pipe(map(prize => prize));
    }

    getAll(drawId: number): Observable<Prize[]> {
        return this.apiService
            .get(`/draws/${drawId}/prizes`)
            .pipe(map(envelope => envelope.prizes));
    }

    delete(drawId: number, prizeId: number): Observable<any> {
        return this.apiService
            .delete(`/draws/${drawId}/prizes/${prizeId}`);
    }
}
