import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class UserService {

  url='http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  //get

  getUsuarios(){
    return this.http.get(this.url)
  }

  getUnUsuario(id:string){
    return this.http.get(this.url+'/'+id);
  }

  addUser(user:Usuario){

  return this.http.post(this.url, user);

  }


  deleteUser(id:string){
   return this.http.delete(this.url+'/'+id);
  }



  editUser(id:string, user:Usuario){
    return this.http.put(this.url+'/'+id,user);

  }


  


}
export interface Usuario{
  id_user?:string;
  nombre?:string;
  apellidos?:string;
  edad?:number;
  oficio?:string;

}
