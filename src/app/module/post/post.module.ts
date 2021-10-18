import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {PostCreateComponent} from '../../component/post/post-create/post-create.component';
import {PostEditComponent} from '../../component/post/post-edit/post-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostDetailComponent} from '../../component/post/post-detail/post-detail.component';
import {SharedModule} from '../shared/shared.module';
import {NgxPaginationModule} from 'ngx-pagination';
// @ts-ignore
import {CarouselModule} from 'ngx-owl-carousel-o';
import {UserModule} from '../user/user.module';
import {RecommendedPostComponent} from '../../component/post/recommended-post/recommended-post.component';
import {NewPostComponent} from "../../component/post/new-post/new-post.component";

@NgModule({
  declarations: [
    PostCreateComponent,
    PostEditComponent,
    PostDetailComponent,
    RecommendedPostComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule,
    UserModule,
    CarouselModule
  ],
  exports: [
    PostEditComponent,
    PostDetailComponent,
  ]
})
export class PostModule {
}
