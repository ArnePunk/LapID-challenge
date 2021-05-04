import { Component, Input, OnInit, OnChanges } from '@angular/core'
import { User } from 'src/interfaces/user'
import { EditDeleteUserService } from 'src/services/edit-delete-user.service'
import { TriggerRefetchUsersService } from 'src/services/trigger-refetch-users.service'

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit, OnChanges {
    @Input() user?: User
    editable?: boolean = false
    password: string = ''
    username: string = ''
    firstname: string = ''
    lastname: string = ''

    constructor(
        private editDeleteService: EditDeleteUserService,
        private triggerRefetchUsersService: TriggerRefetchUsersService
    ) {}

    ngOnInit() {}

    ngOnChanges() {
        if (this.user && !this.username) {
            this.password = this.user.password
            this.username = this.user.login
            this.firstname = this.user.firstname
            this.lastname = this.user.lastname
        }
    }

    editUser() {
        if (this.user) {
            this.editDeleteService
                .editUser(
                    {
                        id: this.user.id,
                        password: this.password,
                        login: this.username,
                        firstname: this.firstname,
                        lastname: this.lastname,
                    },
                    this.user.id
                )
                .subscribe(() => {
                    this.triggerRefetchUsersService.triggerUserRefetch()
                })
        }
    }

    deleteUser() {
        if (this.user) {
            this.editDeleteService.deleteUser(this.user.id).subscribe(() => {
                this.triggerRefetchUsersService.triggerUserRefetch()
            })
        }
    }

    changeEditable() {
        this.editable = !this.editable
    }
}
