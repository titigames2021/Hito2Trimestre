
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../../SERVICES/user.service';
import { Usuario } from './../../SERVICES/user.service'; // Replace with the path to your Usuario interface

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent {
  usuario: Usuario = {
    id_user: '',
    nombre: '',
    apellidos: '',
    edad: 0,
    oficio: ''
  };

  constructor(
    private userService: UserService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}
 
//  ngOnInit(): void {
//   const id_entrada = <string>this.activeRoute.snapshot.params.id];
//   console.log('id de entrada: ' + id_entrada);

//   if (id_entrada) {
//     this.UserService.getUnUsuario(id_entrada).subscribe(
//       (res: Usuario[]) => {
//         if (res.length > 0) {
//           this.usuario = res[0];
//           console.log(res[0]);
//         } else {
//           console.log('No se encontró el usuario con ID: ' + id_entrada);
//         }
//       },
//       err => console.log(err)
//     );
//   }
// }

//   modificar() {
//     this.userService.editUser(this.usuario.id_user, this.usuario).subscribe(
//       res => {
//         console.log(res);
//       },
//       err => console.log(err)
//     );

//     this.router.navigate(['/inicio']);
//   }
}