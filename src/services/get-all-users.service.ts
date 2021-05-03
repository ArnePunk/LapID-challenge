import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { User } from '../interfaces/user'

@Injectable()
export class GetAllUsersService {
    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get<User[]>('http://localhost:4200/api/users/')
    }
}
