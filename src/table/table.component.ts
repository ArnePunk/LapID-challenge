import { Component, OnInit, Output } from '@angular/core'

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
    @Output() user_data = [
        {
            id: 1,
            firstname: 'Max',
            lastname: 'Mustermann',
            login: 'max_mustermann',
            password: '1234',
        },
        {
            id: 2,
            firstname: 'Erika',
            lastname: 'Mustermann',
            login: 'erika_mustermann',
            password: 'Test',
        },
    ]

    constructor() {}

    ngOnInit() {}
}
