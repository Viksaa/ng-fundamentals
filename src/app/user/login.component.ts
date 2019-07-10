import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'selector-name',
    templateUrl: 'login.component.html',
    styles: [`
        em {
            float: right;
            color: #E05c65;
            padding-left: 10px;
        }
    `]
})

export class LoginComponent implements OnInit {
    username;
    password;
    mouseoverLogin: boolean;
    loginInvalid: boolean = false;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() { }

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password)
            .subscribe(response => {
                if (response)
                    this.router.navigate(['/events']);
                else
                    this.loginInvalid = true;

            });
    }

    cancel() {
        this.router.navigate(['/events']);
    }
}
