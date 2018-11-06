import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Prize, PrizesService } from '../core';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PrizeResolver implements Resolve<Prize> {
    constructor(
        private prizesService: PrizesService,
        private router: Router
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        return this.prizesService
            .get(0, +route.params['id'])
            .pipe(catchError((err) => this.router.navigateByUrl('/')));
    }
}
