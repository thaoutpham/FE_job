import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyAccountComponent} from '../../component/admin/company-account/company-account.component';
import {MatSliderModule} from '@angular/material/slider';
import {HttpClientModule} from '@angular/common/http';
import {CompanyListComponent} from '../../component/admin/company-list/company-list.component';
import {CompanyUpdateComponent} from '../../component/admin/company-update/company-update.component';
import {CompanyInfoComponent} from '../../component/admin/company-info/company-info.component';
import {PostManagementComponent} from '../../component/admin/post-management/post-management.component';
import {AdminLoginComponent} from '../../component/admin/admin-login/admin-login.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLoginComponent
  },
  {
    path: 'company-accounts',
    component: CompanyAccountComponent
  },
  {
    path: 'company-list',
    component: CompanyListComponent
  },
  {
    path: 'company-updateinfo/:id',
    component: CompanyUpdateComponent
  },
  {
    path: 'company-info/:id',
    component: CompanyInfoComponent
  },
  {
    path: 'post-management',
    component: PostManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatSliderModule, HttpClientModule],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
