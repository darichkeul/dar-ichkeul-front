import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NiceSelectModule } from "ng-nice-select";

import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CanvasComponent } from './canvas/canvas.component';
import { FooterComponent } from './footer/footer.component';
import { FooterTwoComponent } from './footer-two/footer-two.component';
import { HeaderComponent } from './header/header.component';
import { RoomSidebarComponent } from './room-sidebar/room-sidebar.component';
import { HeaderTwoComponent } from './header-two/header-two.component';
import { HeaderThreeComponent } from './header-three/header-three.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { CounterComponent } from './counter/counter.component';

/***********material ************ */
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
/********************************* */


@NgModule({
  declarations: [BackToTopComponent, BlogSidebarComponent, BreadcrumbComponent, CanvasComponent, FooterComponent, FooterTwoComponent, HeaderComponent, RoomSidebarComponent, HeaderTwoComponent, HeaderThreeComponent, BookingFormComponent, CounterComponent],
  imports: [
    CommonModule,
    RouterModule,
    SlickCarouselModule,
    NgbModule,
    BreadcrumbModule,
    FormsModule,
    NiceSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  exports: [BlogSidebarComponent, BreadcrumbComponent, FooterComponent, FooterTwoComponent, HeaderComponent, RoomSidebarComponent, HeaderTwoComponent, HeaderThreeComponent, BookingFormComponent, CounterComponent]
})
export class SharedModule { }
