import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  successmsg: any = '';
  errormsg: any = '';
  errorMessage: string = '';

  user = {
    pseudo: '',
    adress: '',
    phone: '',
    pass: '',
  };

  constructor(private authService: AuthService) {}

  signup() {
    this.authService.registerMember(this.user).subscribe(
      (res) => {
        this.successmsg = true;
        this.errormsg = false;
        this.errorMessage = '';
      },
      (error) => {
        this.successmsg = false;
        this.errormsg = true;
        this.errorMessage = error.error.message || "Erreur d'enregistrement";
      }
    );
  }

  ngOnInit(): void {}
}
