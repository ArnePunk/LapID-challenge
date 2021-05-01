import { Component, Input, OnInit } from '@angular/core'
import { User } from 'src/interfaces/user'

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
    @Input() user?: User

    constructor() {}

    ngOnInit() {}
}
