import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { User } from 'src/interfaces/user'

@Injectable()
export class EditDeleteUserService {
    constructor(private http: HttpClient) {}

    editUser(user: User, id: number) {
        return this.http.put<User>(
            `http://localhost:4200/api/users/${id}`,
            user
        )
    }

    deleteUser(id: number) {
        return this.http.delete(`http://localhost:4200/api/users/${id}`)
    }
}
