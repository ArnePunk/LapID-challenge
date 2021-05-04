import { BehaviorSubject } from 'rxjs'

export class TriggerRefetchUsersService {
    private refetchUsersSubject = new BehaviorSubject<boolean>(true)

    triggerUserRefetch() {
        this.refetchUsersSubject.next(true)
    }

    userRefetchEventEmitter() {
        return this.refetchUsersSubject.asObservable()
    }
}
