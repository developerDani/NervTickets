import { ReturnStatement } from "@angular/compiler";
import { User } from "./User";

export class Ticket{
    private id : string;
    private subject : string;
    private date : Date; 
    private from : User; 
    private status : string; 
    private body : string; 

    private state : string;

    constructor(id : string, subject : string, date : Date, from : User, status : string, body : string){
        this.id = id;
        this.subject = subject;
        this.date = date; 
        this.from = from; 
        this.status = status; 
        this.body = body;
        this.state = "NEW";
    }

    public getId() : string{
        return this.id;
    }
    public getNameFrom() : string{
        return this.from.getUsername();
    }
    public getDate() : Date{
        return this.date;
    }
    public getDateToString() : string{
        return this.date.getDay()+'/'+this.date.getMonth()+'/'+this.date.getFullYear()+' '+this.date.getHours()+':'+this.date.getMinutes();
    }
    public getUser() : User{
        return this.from;
    }
    public getSubject() : string{
        return this.subject;
    }
    public getResumeSubject() : string{
        if(this.subject.length > 15)
          return this.subject.slice(0, 14) + '...';
        else return this.subject;
    }
    public getBody() : string{
        return this.body;
    }
    public getResumeBody() : string{
        if(this.body.length > 25)
          return this.body.slice(0, 24) + '...';
        else return this.body;
    }
    public setStateSeen(){
        this.state = "SEEN";
    }
    public getState() : string{
        return this.state;
    }
    public getColorState() : string{
        if(this.state == "NEW")
          return "red";
        else if(this.state == "SEEN")
          return "green";
    }
}

