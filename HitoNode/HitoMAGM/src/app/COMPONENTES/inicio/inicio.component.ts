
import { Component } from '@angular/core';
import{UserService, Usuario} from '../../SERVICES/user.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  
  //variable
  ListarUsuario!: Usuario[];

constructor(private UserService:UserService, private router:Router){}

ngOnInit(): void
{
 this.listarEquipo();
 
}

listarEquipo()
{
  
  this.UserService.getUsuarios().subscribe({
    next: res => {
      console.table(res);
      this.ListarUsuario=<any>res;

    },
    error: err => {
      console.log(err);
    }
  });


}

eliminar(id: string | undefined) {
  if (id) {
    this.UserService.deleteUser(id).subscribe({
      next: res => {
        console.log("usuario eliminado");
        this.listarEquipo();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}

modificar(id:string| undefined){

  this.router.navigate(['/edit/'+id]);
}
















}
