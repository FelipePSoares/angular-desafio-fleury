import { Component, OnInit } from '@angular/core';
import { User } from 'src/Models/User';
import { UserService } from '../../services/userService'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [ UserService ]
})
export class PerfilComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser('c8fbcb03-68c0-46c0-8dd7-a699cd32ea9d')
      .then(( user: User) => {
        this.user = user
      });
  }

}
