import { plainToClass } from 'class-transformer'
import { User } from '../models/user.model'

export interface UserDataInterface {
    id: string;
    name: string;
}



export function translatorUser(userData: UserDataInterface): User {
    return plainToClass(User, userData)
}

