import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyLoginComponent} from '../../component/company/company-login/company-login.component';
import {CompanyRegisterComponent} from '../../component/company/company-register/company-register.component';
import {CompanyInfoEditComponent} from '../../component/company/company-info-edit/company-info-edit.component';
import {AccountComponent} from '../../component/company/account/account.component';
import {InfoComponent} from '../../component/company/info/info.component';
import {CompanyEditAccountComponent} from '../../component/company/company-edit-account/company-edit-account.component';
import {ListPostByIdComponent} from '../../component/post/list-post-by-id/list-post-by-id.component';
import {MatSliderModule} from '@angular/material/slider';
import {HttpClientModule} from '@angular/common/http';
import {CompanyDetailsComponent} from '../../component/company/company-details/company-details.component';
import {AllRecommendedCompanyComponent} from '../../component/company/all-recommended-company/all-recommended-company.component';

const routes: Routes = [
  {
    path: 'login',
    component: CompanyLoginComponent
  },
  {
    path: 'register',
    component: CompanyRegisterComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'edit-account',
    component: CompanyEditAccountComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'edit-info',
    component: CompanyInfoEditComponent
  },
  {
    path: 'find-all',
    component: ListPostByIdComponent
  },
  {
    path: 'view/:id',
    component: CompanyDetailsComponent
  },
  {
    path: 'all-recommended',
    component: AllRecommendedCompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatSliderModule, HttpClientModule],
  exports: [RouterModule]
})
export class CompanyRoutingModule {
}
