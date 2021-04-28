import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../logic/Ticket';
import { Router } from '@angular/router';
import { ControllerTicket } from '../../logic/ControllerTicket';
import { ControllerUser } from 'src/logic/ControllerUser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public tickets : Ticket[];

  constructor(private router : Router,
    private ctrlTicket : ControllerTicket,
    private ctrlUser : ControllerUser) { }

  ngOnInit(): void {
    if(this.ctrlUser.getActualUser().getUsername() == "admin"){
      this.tickets = this.ctrlTicket.getAllTickets();
    }
    else{
      this.tickets = this.ctrlUser.getActualUser().getTickets();
    }
  }

  public goBack(){
    this.router.navigate(['login']);
  }

}
