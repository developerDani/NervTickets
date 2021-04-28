import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControllerUser } from 'src/logic/ControllerUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private wrongPassword = false; 

  constructor(private router : Router, 
    private ctrlUser : ControllerUser) { }

  ngOnInit(): void {
  }

  public verifyId(username : string){
    if(username == ""){
      (<HTMLInputElement>document.getElementById("btn-login")).disabled = false;
      (<HTMLInputElement> document.getElementById("id-login")).style.backgroundColor = 'transparent';
    }
    else{
      if(this.ctrlUser.userBelongs(username)){
        (<HTMLInputElement>document.getElementById("btn-login")).disabled = false;
        (<HTMLInputElement> document.getElementById("id-login")).style.backgroundColor = 'rgb( 88, 214, 141 )';
      }
      else{
        (<HTMLInputElement>document.getElementById("btn-login")).disabled = true;
        (<HTMLInputElement> document.getElementById("id-login")).style.backgroundColor = 'rgb(236, 112, 99)';
      }

    }
  }

  public login(username : string, password : string){
    console.log(password);
    if(this.ctrlUser.correctPassword(username, password)){
      this.ctrlUser.setActualUser(username);
      this.router.navigate(['home']);
    }
    else{
      this.wrongPassword = true; 
      (<HTMLInputElement> document.getElementById("password-login")).style.backgroundColor = 'rgb(236, 112, 99)';

    }
  }

  public verifyPassword(){
    if(this.wrongPassword){
      this.wrongPassword = false; 
      (<HTMLInputElement> document.getElementById("password-login")).style.backgroundColor = 'transparent';
    }
  }

}
