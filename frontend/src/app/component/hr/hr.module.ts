import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'; 
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { HrSideNavbarComponent } from './hr-side-navbar/hr-side-navbar.component';

@NgModule({
  declarations: [
    HrDashboardComponent,
    HrSideNavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
  ],
  exports: [
    HrDashboardComponent,
    HrSideNavbarComponent,
  ],
})
export class HrModule {}
