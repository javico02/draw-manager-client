import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../core';
import { DrawResolver } from './draw-resolver.service';
import { DrawEditorComponent } from './draw-editor/draw-editor.component';
import { DrawDetailsComponent } from './draw-details/draw-details.component';

const drawsRoutes: Routes = [
    {
        path: 'draw-editor',
        component: DrawEditorComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'draws/:id',
        component: DrawDetailsComponent,
        resolve: {
            draw: DrawResolver
        },
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(drawsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DrawsRoutingModule { }
