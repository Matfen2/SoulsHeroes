import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  successmsg: any = "Succès de l'enregistrement";
  errormsg: any = "Echec de l'enregistrement";

  signup: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.signup = this.formBuilder.group({
      pseudo: ['', Validators.required],
      adress: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$'),
        ],
      ],
      phone: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }

  register() {
    this.authService.registerMember(this.signup.value).subscribe(
      (res) => {
        alert(res.message);
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }

  ngOnInit(): void {}
}
