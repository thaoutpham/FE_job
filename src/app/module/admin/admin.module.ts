import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {CompanyAccountComponent} from '../../component/admin/company-account/company-account.component';
import {CompanyListComponent} from '../../component/admin/company-list/company-list.component';
import {CompanyUpdateComponent} from '../../component/admin/company-update/company-update.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {CompanyInfoComponent} from '../../component/admin/company-info/company-info.component';
import {PostManagementComponent} from '../../component/admin/post-management/post-management.component';
import {AdminLoginComponent} from '../../component/admin/admin-login/admin-login.component';

@NgModule({
  declarations: [
    CompanyAccountComponent,
    CompanyListComponent,
    CompanyUpdateComponent,
    CompanyInfoComponent,
    PostManagementComponent,
    AdminLoginComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    CompanyAccountComponent,
    CompanyListComponent,
    CompanyUpdateComponent,
    CompanyInfoComponent,
    PostManagementComponent
  ]
})
export class AdminModule { }
