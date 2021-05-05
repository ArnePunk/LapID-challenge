import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { User } from 'src/interfaces/user'

@Injectable()
export class AddNewUserService {
    constructor(private http: HttpClient) {}

    createNewUser(user: User) {
        return this.http.post<User>('http://localhost:4200/api/users/', user)
    }
}
