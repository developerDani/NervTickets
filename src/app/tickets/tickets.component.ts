import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControllerTicket } from 'src/logic/ControllerTicket';
import { ControllerUser } from 'src/logic/ControllerUser';
import { Ticket } from '../../logic/Ticket';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  @Input() public tickets : Ticket[];

  constructor(private router : Router,
    private ctrlTicket : ControllerTicket,
    private ctrlUser : ControllerUser) { 
  }

  ngOnInit(): void {
    if(this.tickets.length > 3){
      this.tickets = this.tickets.slice(this.tickets.length-3, this.tickets.length);
    }
  }

  public seeTicket(ticket : Ticket){
    if(this.ctrlUser.getActualUser().getUsername() == "admin"){
      ticket.setStateSeen();
    }
    this.ctrlTicket.setActualTicket(ticket);
    this.router.navigate(['ticket']);
  }

  public getResumeSubject(subject : string) : string{
    return 'hola';
  }

}
