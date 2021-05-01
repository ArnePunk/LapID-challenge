import { Component, Input, OnInit } from '@angular/core'
import { User } from 'src/interfaces/user'

@Component({
    selector: 'app-table-row',
    templateUrl: './table-row.component.html',
    styleUrls: ['./table-row.component.scss'],
})
export class TableRowComponent implements OnInit {
    @Input() user?: User
    showEdit?: boolean = false

    constructor() {}

    ngOnInit() {}

    toggleShowEdit() {
        this.showEdit = !this.showEdit
    }
}
