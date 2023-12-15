import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private authService: AuthService) {}

  answer = new FormGroup({
    adress: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  successmsg: any = '';
  errormsg: any = '';

  sendMessage() {
    this.authService.giveMessage(this.answer.value).subscribe(
      (res) => {
        this.successmsg = true;
        this.errormsg = false;
      },
      (error) => {
        this.successmsg = false;
        this.errormsg = true;
      }
    );
  }

  ngOnInit(): void {}
}
