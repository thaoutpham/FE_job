import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CompanyRoutingModule} from './company-routing.module';
import {CompanyLoginComponent} from '../../component/company/company-login/company-login.component';
import {CompanyRegisterComponent} from '../../component/company/company-register/company-register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CompanyInfoEditComponent} from '../../component/company/company-info-edit/company-info-edit.component';
import {AppModule} from '../../app.module';
// import {UploadComponent} from '../../component/upload/upload.component';
import {AccountComponent} from '../../component/company/account/account.component';
import {InfoComponent} from '../../component/company/info/info.component';
import {CompanyEditAccountComponent} from '../../component/company/company-edit-account/company-edit-account.component';
import {ListPostByIdComponent} from '../../component/post/list-post-by-id/list-post-by-id.component';
import {CompanyDetailsComponent} from '../../component/company/company-details/company-details.component';
import {SharedModule} from '../shared/shared.module';
import {AllRecommendedCompanyComponent} from '../../component/company/all-recommended-company/all-recommended-company.component';
import {CompanyPostComponent} from '../../component/post/company-post/company-post.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [CompanyLoginComponent,
    CompanyRegisterComponent,
    CompanyInfoEditComponent,
    CompanyEditAccountComponent,
    // UploadComponent,
    AccountComponent,
    ListPostByIdComponent,
    InfoComponent,
    CompanyDetailsComponent,
    AllRecommendedCompanyComponent,
    CompanyPostComponent,
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule
  ],
  exports: [CompanyLoginComponent,
    CompanyRegisterComponent,
    CompanyInfoEditComponent,
    // UploadComponent,
    AccountComponent,
    InfoComponent,
    AllRecommendedCompanyComponent]
})
export class CompanyModule {
}
