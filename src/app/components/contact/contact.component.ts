import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.myform = this.formBuilder.group({
      fullName: '',
      email: '',
      phoneNumber: '',
      body: '',
    });
  }

  ngOnInit(): void {}

  onFormSubmit() {
    this.isSuccess = false;
    this.isError = false;

    const formData = this.myform.value;

    const params: Message = {
      fullName: this.myform.get('fullName')?.value!,
      email: this.myform.get('email')?.value!,
      phoneNumber: this.myform.get('phoneNumber')?.value!,
      body: this.myform.get('body')?.value!,
    };

    this.messageService
      .addMessage(params)
      .subscribe(
        (response) => (this.showSuccess(response), this.handleError(response))
      );
  }

  private handleError(err: any) {
    console.log('Response Error. Status: ', err.status);
    console.log('Response Error. Status Text: ', err.statusText);
    console.log('adsasd');
  }

  private showSuccess(res: any) {
    if (res.status != 400) {
      this.isSuccess = true;
    } else {
      this.isError = true;
    }
  }
}
