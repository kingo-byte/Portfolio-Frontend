import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExperienceService } from 'src/app/services/experience.service';
import { Experience } from 'src/app/services/models/Experience';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit{
  experienceForm!: FormGroup;
  isSuccess: boolean = false;
  isError: boolean = false;
  isFormSubmitted: boolean = false;
  @ViewChild('closebutton') closebutton: any;
  @Output() addedExperience = new EventEmitter<Experience>();

  constructor(
    private experienceService: ExperienceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.experienceForm = this.formBuilder.group({
      title: ['',[Validators.required]],
      description: ['',[Validators.required]],
      address: ['',[Validators.required]],
      start: ['',[Validators.required]],
      end: ''
    });
  }

  ngOnInit(): void {}

  onExperienceFormSubmit()
  {
    this.isSuccess = false;
    this.isError = false;
    this.isFormSubmitted = true;

    if(this.experienceForm.invalid)
    {
      return;
    }

    const params:Experience = 
    {
      userId:1,
      title: this.experienceForm.get('title')?.value!,
      description: this.experienceForm.get('description')?.value!,
      address: this.experienceForm.get('address')?.value!,
      start: this.experienceForm.get('start')?.value!,
      end: this.experienceForm.get('end')?.value! === ''? null : this.experienceForm.get('end')?.value! 
    }

    this.experienceService.addExperience(params).subscribe({
      next:(res)=>
      {
        this.isSuccess = true;
        this.isFormSubmitted = false;
        this.experienceForm.reset();
        this.closebutton.nativeElement.click();
        this.addedExperience.emit(res);
      },
      error:(err) => {
          this.isError = true;
      }
    })
  }
}
