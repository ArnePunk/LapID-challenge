import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { User } from 'src/interfaces/user'

@Component({
    selector: 'app-user-entry',
    templateUrl: './user-entry.component.html',
    styleUrls: ['./user-entry.component.scss'],
})
export class UserEntryComponent implements OnInit {
    @Input() user?: User
    @Input() showEdit?: boolean
    @Output() notify = new EventEmitter()

    constructor() {}

    ngOnInit() {}

    triggerParentToggleShowEdit() {
        this.notify.emit()
    }
}
