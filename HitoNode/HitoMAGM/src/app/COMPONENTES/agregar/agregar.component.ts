
import { Component } from '@angular/core';
import{Usuario,UserService}from '../../SERVICES/user.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

usuario: Usuario={

  id_user:'',
  nombre:'',
  apellidos:'',
  edad: 0,
  oficio:''


};

 constructor(private UserService:UserService, private router:Router){}

   ngOnInit():void{

   }


  agregar(){
    delete this.usuario.id_user;
    this.UserService.addUser(this.usuario).subscribe();
    this.router.navigate(['/inicio']);
  }



}
