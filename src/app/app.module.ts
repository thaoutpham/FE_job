import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {PostListComponent} from './component/post/post-list/post-list.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { SearchbarComponent } from './component/shared/searchbar/searchbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PostSearchComponent } from './component/post/post-search/post-search.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {environment} from '../environments/environment.prod';
import {MainComponent} from './component/main/main.component';
// @ts-ignore
import {AngularFireStorageModule} from '@angular/fire/storage';
// @ts-ignore
import {AngularFireModule} from '@angular/fire';

import {SharedModule} from './module/shared/shared.module';
import {SearchComponent} from './component/post/search/search.component';
import {NewPostComponent} from './component/post/new-post/new-post.component';

import {SideBarComponent} from './component/post/side-bar/side-bar.component';
import {PreloaderStartComponent} from './component/shared/preloader-start/preloader-start.component';
import {NavbarComponent} from './component/shared/navbar/navbar.component';
import {FooterComponent} from './component/shared/footer/footer.component';
import {JwPaginationComponent, JwPaginationModule} from 'jw-angular-pagination';
import {NgxPaginationModule} from 'ngx-pagination';
import { PostTopCompanyComponent } from './component/post/post-top-company/post-top-company.component';
import { PageComponent } from './component/user/page/page.component';
import { EditExpComponent } from './component/user/page/edit-exp/edit-exp.component';
import { DeleteExpComponent } from './component/user/page/delete-exp/delete-exp.component';
import { CreateExpComponent } from './component/user/page/create-exp/create-exp.component';
import { ListExpComponent } from './component/user/page/list-exp/list-exp.component';
// @ts-ignore
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {MatMenuModule} from '@angular/material/menu';
// @ts-ignore
import {SearchAdvancedComponent} from './component/shared/search-advanced/search-advanced.component';
import {RecommendedPostComponent} from './component/post/recommended-post/recommended-post.component';
import { PostManagementComponent } from './component/admin/post-management/post-management.component';
import { Top5RecommendedCompanyComponent } from './component/post/top5-recommended-company/top5-recommended-company.component';
import {UploadCvComponent} from './component/upload-cv/upload-cv.component';
import {AdvancedComponent} from './component/advanced/advanced.component';
import { Top1CompanyComponent } from './component/company/top1-company/top1-company.component';
import { Top6RecommendedComponent } from './component/post/top6-recommended/top6-recommended.component';
import { CompanyPostComponent } from './component/post/company-post/company-post.component';
import { UnderConstructionComponent } from './component/shared/under-construction/under-construction.component';
import { AdminLoginComponent } from './component/admin/admin-login/admin-login.component';
import { UserEditAccountComponent } from './component/user/user-edit-account/user-edit-account.component';
import { EditComponent } from './component/user/edit/edit.component';





@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    NewPostComponent,
    SideBarComponent,
    PreloaderStartComponent,
    NavbarComponent,
    FooterComponent,
    PostListComponent,
    SearchbarComponent,
    FooterComponent,
    PostTopCompanyComponent,
    PostSearchComponent,
    PageComponent,
    EditExpComponent,
    DeleteExpComponent,
    CreateExpComponent,
    ListExpComponent,
    UploadCvComponent,
    Top5RecommendedCompanyComponent,
    Top1CompanyComponent,
    Top6RecommendedComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    JwPaginationModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    CarouselModule,
    IvyCarouselModule,
    SharedModule,
  ],
  providers: [],
  exports: [
    SideBarComponent,
    MainComponent,
    UploadCvComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
