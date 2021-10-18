import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostCreateComponent} from '../../component/post/post-create/post-create.component';
import {PostEditComponent} from '../../component/post/post-edit/post-edit.component';
import {PostDetailComponent} from '../../component/post/post-detail/post-detail.component';
import {AdvancedComponent} from '../../component/advanced/advanced.component';
import {PostSearchComponent} from '../../component/post/post-search/post-search.component';
import { RecommendedPostComponent } from 'src/app/component/post/recommended-post/recommended-post.component';

const routes: Routes = [
  {
    path: 'create',
    component: PostCreateComponent
  }, {
    path: 'search-advanced',
    component: AdvancedComponent
  },
  {
    path: 'view/:id',
    component: PostDetailComponent
  },
  {
    path: 'edit/:id',
    component: PostEditComponent
  },
  {
    path: 'search',
    component: PostSearchComponent
  },
  {
    path: 'recommended',
    component: RecommendedPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
