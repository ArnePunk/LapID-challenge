import { Component, OnInit } from '@angular/core'
import { User } from 'src/interfaces/user'
import { GetAllUsersService } from 'src/services/get-all-users.service'

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
    user_data: User[] = []

    constructor(private getUsersService: GetAllUsersService) {}

    ngOnInit() {
        this.fetchUsers()
    }

    fetchUsers() {
        this.getUsersService.getUsers().subscribe((data: User[]) => {
            this.user_data = data
        })
    }
}
