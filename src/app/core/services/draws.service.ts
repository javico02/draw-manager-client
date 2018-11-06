import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from './api.service';
import { Draw, DrawListConfig } from '../models';

@Injectable()
export class DrawsService {
    constructor(
        private apiService: ApiService
    ) { }

    query(config: DrawListConfig): Observable<{ draws: Draw[], drawsCount: number }> {
        // Convert any filters over to Angular's URLSearchParams
        const params = {};
        Object
            .keys(config.filters)
            .forEach((key) => {
                params[key] = config.filters[key];
            });

        return this.apiService
            .get('/draws', new HttpParams({ fromObject: params }));
    }

    get(drawId: number): Observable<Draw> {
        return this.apiService
            .get('/draws/' + drawId)
            .pipe(map(draw => draw));
    }

    delete(drawId: number): Observable<any> {
        return this.apiService
            .delete('/draws/' + drawId);
    }

    close(drawId: number): Observable<Draw> {
        return this.apiService
            .put(`/draws/${drawId}`)
            .pipe(map(closedDraw => closedDraw));
    }

    save(draw): Observable<Draw> {
        // If we're updating an existing article
        // if (article.slug) {
        //   return this.apiService.put('/articles/' + article.slug, {article: article})
        //     .pipe(map(data => data.article));

        // Otherwise, create a new article
        // } else {
        return this.apiService
            .post('/draws/', { drawData: draw })
            .pipe(map(savedDraw => savedDraw));
        // }
    }
}
