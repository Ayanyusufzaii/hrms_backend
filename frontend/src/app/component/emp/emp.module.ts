import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { EmpSideNavbarComponent } from './emp-side-navbar/emp-side-navbar.component';

@NgModule({
  declarations: [
    EmpDashboardComponent,
    EmpSideNavbarComponent
  ],
  imports: [CommonModule],
  exports: [EmpDashboardComponent]
})
export class EmployeeModule {}
