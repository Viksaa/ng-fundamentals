import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { EventService, ISession, IEvent } from '../events';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: [ './navbar.component.css' ]
})
export class NavBarComponent implements OnInit {

    searchTerm: string = "";
    foundSessions: ISession[];
    events: IEvent[];

    constructor(public auth: AuthService, private eventService: EventService, private route: ActivatedRoute) { }


    searchSessions(searchTerm: string) {
        this.eventService.searchSessions(searchTerm).subscribe(s => {
            this.foundSessions = s;
        });
    }

    ngOnInit() {
        this.eventService.getEvents().subscribe(s => {
            this.events = s;
        })
    }
}
