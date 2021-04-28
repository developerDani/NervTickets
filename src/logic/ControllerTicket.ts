import { Injectable } from '@angular/core'
import { Ticket } from './Ticket';
import { User } from './User';

@Injectable({
    providedIn: 'root' 
})
export class ControllerTicket{
    private tickets : Ticket[]; 
    private actualTicket : Ticket;

    constructor(){
        this.tickets = [];
    }

    public getAllTickets() : Ticket[]{
        return this.tickets; 
    }
    public setActualTicket(ticket : Ticket){
        this.actualTicket = ticket;
    }
    public getActualTicket() : Ticket{
        return this.actualTicket;
    }

    public addTicketToUser(user : User, id : string, subject : string, date : Date, from : User, status : string, body : string){
        let ticket = new Ticket(id, subject, date, from, status, body);
        this.tickets.push(ticket);
        user.addTicket(ticket);
    }



    public getTickets(){
        let setOfTickets = [];
        for(let ticket of this.tickets){
            var json = {
                "ticketId" : ticket.getId(),
                "subject" : ticket.getSubject(),
                "date" : ticket.getDate(),
                "from" : ticket.getNameFrom(),
                "status" : ticket.getState(),
                "body" : ticket.getBody()
            }
            setOfTickets.push(json);
        }
        console.log(setOfTickets);
        return setOfTickets;
    }
}