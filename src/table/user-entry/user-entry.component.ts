import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { User } from 'src/interfaces/user'

@Component({
    selector: 'app-user-entry',
    templateUrl: './user-entry.component.html',
    styleUrls: ['./user-entry.component.scss'],
})
export class UserEntryComponent implements OnInit {
    @Input() user?: User
    showEdit?: boolean

    constructor() {}

    ngOnInit() {}

    toggleShowEdit() {
        this.showEdit = !this.showEdit
    }
}
