import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { EventService, ISession } from '../events';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: [ './navbar.component.css' ]
})
export class NavBarComponent {

    searchTerm: string = "";
    foundSessions: ISession[];

    constructor(public auth: AuthService, private eventService: EventService) { }


    searchSessions(searchTerm: string) {
        this.eventService.searchSessions(searchTerm).subscribe(s => {
            this.foundSessions = s;
        });
    }
}
