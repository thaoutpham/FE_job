import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
}
