import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Draw, DrawsService } from '../core';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DrawResolver implements Resolve<Draw> {
    constructor(
        private drawsService: DrawsService,
        private router: Router
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        return this.drawsService
            .get(+route.params['id'])
            .pipe(catchError((err) => this.router.navigateByUrl('/')));

    }
}
