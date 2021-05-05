import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TableComponent } from 'src/table/table.component'
import { UserEditComponent } from 'src/table/user-entry/user-edit/user-edit.component'
import { UserEntryComponent } from 'src/table/user-entry/user-entry.component'
import { TableHeadComponent } from 'src/table/table-head/table-head.component'
import { AddUserButtonComponent } from 'src/table/add-user-button/add-user-button.component'
import { AddUserModalComponent } from 'src/table/add-user-button/add-user-modal/add-user-modal.component'
import { EditDeleteUserService } from 'src/services/edit-delete-user.service'
import { GetAllUsersService } from 'src/services/get-all-users.service'
import { AddNewUserService } from 'src/services/add-new-user.service'
import { FormsModule } from '@angular/forms'
import { TriggerRefetchUsersService } from 'src/services/trigger-refetch-users.service'

@NgModule({
    declarations: [
        AppComponent,
        TableComponent,
        AddUserButtonComponent,
        AddUserModalComponent,
        UserEditComponent,
        UserEntryComponent,
        TableHeadComponent,
    ],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
    providers: [
        EditDeleteUserService, //service for editing and deleting users, injected into \src\table\user-entry\user-edit\user-edit.component.ts
        GetAllUsersService, //service for fetching all users, injected into \src\table\table.component.ts
        AddNewUserService, //service for adding new users, injected into \src\table\add-user-button\add-user-modal\add-user-modal.component.ts
        TriggerRefetchUsersService, //service for triggering user refetch in \src\table\table.component.ts from \src\table\user-entry\user-edit\user-edit.component.ts and \src\table\add-user-button\add-user-modal\add-user-modal.component.ts
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
