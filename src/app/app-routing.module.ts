import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RhLayoutComponent } from './layouts/rh-layout/rh-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AddCandidateModule } from './views/rh-views/add-candidate/add-candidate.module';
import { ApplicationGuardService } from './services/guards/application-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: AuthLayoutComponent,
  },
  {
    path: '',
    component: RhLayoutComponent,
    canActivate: [ApplicationGuardService],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/rh-views/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'addcandidate',
        component: AddCandidateModule,
      },
      {
        path: 'listcandidate/:type',
        loadChildren: () =>
          import(
            './views/common-views/list-candidate/list-candidate.module'
          ).then((m) => m.ListCandidateModule),
      },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [ApplicationGuardService],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/admin-views/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'adduserrh',
        loadChildren: () =>
          import('./views/admin-views/add-user-rh/add-user-rh.module').then(
            (m) => m.AddUserRHModule
          ),
      },
      {
        path: 'listuserrh',
        loadChildren: () =>
          import('./views/admin-views/list-user-rh/list-user-rh.module').then(
            (m) => m.ListUserRHModule
          ),
      },
      {
        path: 'listcandidate/:type',
        loadChildren: () =>
          import(
            './views/common-views/list-candidate/list-candidate.module'
          ).then((m) => m.ListCandidateModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
