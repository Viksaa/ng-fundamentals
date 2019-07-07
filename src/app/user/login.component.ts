import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'selector-name',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    username;
    password;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() { }

    login(formValues) {
        this.authService.loginUser(formValues.username, formValues.password);
        this.router.navigate(['/events']);
    }

    cancel() {
        this.router.navigate(['/events']);
    }
}
