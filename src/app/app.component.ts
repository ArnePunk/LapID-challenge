import { Component } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'user'
}

/*
COMPONENT HIERARCHY OF SPA:
-> table
    -> table-head
    -> user-entry x N
        -> user-edit
    -> add-user-button
        -> add-user-modal (child of button for conditional rendering)
*/
