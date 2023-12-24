import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { Message } from 'src/app/services/models/message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  myform!: FormGroup;
  isSuccess: boolean = false;
  isError: boolean = false;
  isFormSubmitted: boolean = false;

  constructor(
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.myform = this.formBuilder.group({
      fullName: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      phoneNumber: ['',[Validators.required]],
      body: ['',[Validators.required]],
    });
  }

  ngOnInit(): void {}

  onFormSubmit() {
    this.isSuccess = false;
    this.isError = false;
    this.isFormSubmitted = true;

    if (this.myform.invalid) {
      return;
    }

    const params: Message = {
      fullName: this.myform.get('fullName')?.value!,
      email: this.myform.get('email')?.value!,
      phoneNumber: this.myform.get('phoneNumber')?.value!,
      body: this.myform.get('body')?.value!,
    };

      this.messageService.addMessage(params).subscribe({
        next: (res) => {
          this.isSuccess = true;
          this.isFormSubmitted = false;
          this.myform.reset();
        },
        error: (err) => {
          this.isError = true;
        }
      });
  }
}
