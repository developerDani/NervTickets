import { Injectable } from '@angular/core'
import { ControllerTicket } from './ControllerTicket';
import { User } from './User';

@Injectable({
    providedIn: 'root' 
})
export class ControllerUser{
    private users : User[]; 
    private actualUser : User;

    constructor(private ctrlTicket : ControllerTicket){
        this.users = [];
        this.users.push(new User("admin", "admin"));

        let jonsnow = new User("jonsnow", "got");
        this.users.push(jonsnow);
        this.ctrlTicket.addTicketToUser(jonsnow, "id2", "hey, my new clock fails", new Date(), new User("jonsnow", "got"), "status2", "i bought your new clock the last week and it does not work");

        let aryastark = new User("aryastark", "got");
        this.users.push(aryastark);
        this.ctrlTicket.addTicketToUser(aryastark, "id", "hey, my new clock fails", new Date(), new User("aryastark", "got"), "status", "i want to know why my NEW clock is not working!");

        let ticketsJson = this.ctrlTicket.getTickets();
    }

    public userBelongs(username : string) : boolean{
        for(let user of this.users){
            if(user.getUsername() == username)
              return true;
        }
        return false;
    }

    public correctPassword(username : string, password : string) : boolean{
        for(let user of this.users){
            if(user.getUsername() == username){
                if(username && user.getPassword() == password){
                    return true;
                }
                else return false;
            }
        }
    }

    public setActualUser(username : string){
        for(let user of this.users){
            if(user.getUsername() == username)
              this.actualUser = user; 
        }
    }
    public getActualUser() : User{
        return this.actualUser;
    }
}