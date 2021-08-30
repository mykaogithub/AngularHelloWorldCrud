import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListPaginationComponent } from './user-list-pagination/user-list-pagination.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [{ path:'users', component: UserListComponent}, 
{path:'adduser', component: UserFormComponent}, {path:'users/page', component: UserListPaginationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
