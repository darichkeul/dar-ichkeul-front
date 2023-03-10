import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [BlogComponent, ContentComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    NgxPaginationModule,
    HttpClientModule,
    NgbModule
  ]
})
export class BlogModule { }
