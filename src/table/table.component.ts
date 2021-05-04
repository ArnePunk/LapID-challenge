import { Component, OnInit } from '@angular/core'
import { User } from 'src/interfaces/user'
import { GetAllUsersService } from 'src/services/get-all-users.service'
import { TriggerRefetchUsersService } from 'src/services/trigger-refetch-users.service'

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
    user_data: User[] = []

    constructor(
        private getUsersService: GetAllUsersService,
        private triggerRefetchUsersService: TriggerRefetchUsersService
    ) {}

    ngOnInit() {
        this.fetchUsers()
        this.triggerRefetchUsersService
            .userRefetchEventEmitter()
            .subscribe(() => this.fetchUsers())
    }

    fetchUsers() {
        this.getUsersService.getUsers().subscribe((data: User[]) => {
            this.user_data = data
        })
    }
}
