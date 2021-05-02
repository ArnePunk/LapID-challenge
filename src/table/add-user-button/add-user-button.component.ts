import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-add-user-button',
    templateUrl: './add-user-button.component.html',
    styleUrls: ['./add-user-button.component.scss'],
})
export class AddUserButtonComponent implements OnInit {
    modalOpen?: boolean = false
    constructor() {}

    ngOnInit() {}

    toggleModal() {
        this.modalOpen = !this.modalOpen
    }
}
