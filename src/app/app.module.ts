import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TableComponent } from 'src/table/table.component'
import { TableRowComponent } from 'src/table/table-row/table-row.component'
import { UserEditComponent } from 'src/table/table-row/user-edit/user-edit.component'
import { UserEntryComponent } from 'src/table/table-row/user-entry/user-entry.component'
import { TableHeadComponent } from 'src/table/table-head/table-head.component'

@NgModule({
    declarations: [
        AppComponent,
        TableComponent,
        TableRowComponent,
        UserEditComponent,
        UserEntryComponent,
        TableHeadComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
