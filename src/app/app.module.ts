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
import {environment} from '../environments/environment.prod';
import {MainComponent} from './component/main/main.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {SharedModule} from './module/shared/shared.module';
import {SearchComponent} from './component/post/search/search.component';
import {NewPostComponent} from './component/post/new-post/new-post.component';
import {SideBarComponent} from './component/post/side-bar/side-bar.component';
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
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {MatMenuModule} from '@angular/material/menu';
import { Top5RecommendedCompanyComponent } from './component/post/top5-recommended-company/top5-recommended-company.component';
import { Top1CompanyComponent } from './component/company/top1-company/top1-company.component';
import { Top6RecommendedComponent } from './component/post/top6-recommended/top6-recommended.component';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    NewPostComponent,
    SideBarComponent,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
