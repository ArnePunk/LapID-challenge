import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core'
import { User } from 'src/interfaces/user'
import { AddNewUserService } from 'src/services/add-new-user.service'

@Component({
    selector: 'app-add-user-modal',
    templateUrl: './add-user-modal.component.html',
    styleUrls: ['./add-user-modal.component.scss'],
})
export class AddUserModalComponent implements OnInit {
    @Output() notify = new EventEmitter()
    password: string = ''
    username: string = ''
    firstname: string = ''
    lastname: string = ''

    constructor(private addUserService: AddNewUserService) {}

    ngOnInit() {}

    triggerCloseModal() {
        this.notify.emit()
    }

    submitUser() {
        this.addUserService
            .createNewUser({
                id: 0,
                password: this.password,
                login: this.username,
                firstname: this.firstname,
                lastname: this.lastname,
            })
            .subscribe(() => {
                location.reload()
            })
        this.triggerCloseModal()
    }
}
