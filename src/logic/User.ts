import { Ticket } from './Ticket';

export class User{
    private username : string;
    private password : string;
    private tickets : Ticket[];

    constructor(username : string, password : string){
        this.username = username;
        this.password = password;
        this.tickets = [];
    }

    public getUsername() : string{
        return this.username;
    }
    public getPassword() : string{
        return this.password;
    }

    public addTicket(ticket : Ticket){
        this.tickets.push(ticket);
    }
    public getTickets() : Ticket[]{
        return this.tickets;
    }


}