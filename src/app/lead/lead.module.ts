import { ProspectTrackingComponent } from './container/prospect-tracking.component';
import { ProspectiveMembersComponent } from './container/prospective-members.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProspectTrackingService } from './services/prospect-tracking.service'
import { EffectsModule } from '@ngrx/effects';

export const routes: Routes = [
    { path: 'prospect-tracking', component: ProspectTrackingComponent },
    { path: 'prospective-members', component: ProspectiveMembersComponent }
  ];
  import { ProspectTrackingEffects } from './effects/prospect-tracking.effects';

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        EffectsModule.forRoot([ProspectTrackingEffects]),
    ],
    declarations: [
        ProspectTrackingComponent,
        ProspectiveMembersComponent
    ],
    exports: [
        RouterModule
    ],
    providers: [
        ProspectTrackingService
    ]
})
export class LeadModule {} 