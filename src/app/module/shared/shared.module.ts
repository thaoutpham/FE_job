import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloaderStartComponent} from '../../component/shared/preloader-start/preloader-start.component';
import {NavbarComponent} from '../../component/shared/navbar/navbar.component';
import {FooterComponent} from '../../component/shared/footer/footer.component';
import {SearchComponent} from '../../component/post/search/search.component';
import {NewPostComponent} from '../../component/post/new-post/new-post.component';
import {SideBarComponent} from '../../component/post/side-bar/side-bar.component';
import {RecommendedPostComponent} from '../../component/post/recommended-post/recommended-post.component';
import {SearchAdvancedComponent} from '../../component/shared/search-advanced/search-advanced.component';
import {UploadComponent} from '../../component/upload/upload.component';
import {AdvancedComponent} from '../../component/advanced/advanced.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import {UnderConstructionComponent} from '../../component/shared/under-construction/under-construction.component';

@NgModule({
  declarations: [
    UploadComponent,
    SearchAdvancedComponent,
    AdvancedComponent,
    UnderConstructionComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule
  ],
  exports: [
    UploadComponent,
    SearchAdvancedComponent,
    // UnderConstructionComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
}
