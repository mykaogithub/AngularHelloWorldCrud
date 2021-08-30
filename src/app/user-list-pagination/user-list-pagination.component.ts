import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list-pagination',
  templateUrl: './user-list-pagination.component.html',
  styleUrls: ['./user-list-pagination.component.scss']
})
export class UserListPaginationComponent implements OnInit {

  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  users!: User[];

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
   
    
    this.userService.findAllPageable().subscribe(data => {
      this.users = data;
    });
   
  }

}
