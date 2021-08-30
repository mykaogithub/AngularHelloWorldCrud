import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon"; // <----- Here
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserListPaginationComponent } from './user-list-pagination/user-list-pagination.component';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    HeaderComponent,
    FooterComponent,
    UserListPaginationComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule, 
    MatIconModule,
    MDBBootstrapModule.forRoot(),
    BrowserModule, 
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    DataTablesModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPaginationModule
    
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
