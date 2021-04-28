import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/logic/Ticket';
import { ControllerTicket } from 'src/logic/ControllerTicket';
import { User } from 'src/logic/User';
import { ControllerUser } from 'src/logic/ControllerUser';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  public ticket : Ticket;
  public actualUser : User;

  constructor(private router : Router,
    private ctrlTicket : ControllerTicket,
    private ctrlUser : ControllerUser) { }

  ngOnInit(): void {
    this.ticket = this.ctrlTicket.getActualTicket();
    this.actualUser = this.ctrlUser.getActualUser();
  }

  public goBack(){
    this.router.navigate(['home']);
  }

}
