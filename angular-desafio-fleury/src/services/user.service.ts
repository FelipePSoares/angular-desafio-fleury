import { Http, Response } from '@angular/http'
import { Injectable } from '@angular/core'
import { User } from '../models/user'

import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/retry'

@Injectable()

export class UserService {

  constructor(private http: Http) {}

  public getUser(id:string): Promise<User> {
    return this.http.get(`https://core-desafio-fleury.mybluemix.net/api/usuario/${id}`)
        .toPromise()
        .then((resposta: Response) => { return resposta.json() })
    }
}