import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience.service';
import { SkillService } from 'src/app/services/skill.service';
import { LanguageService } from 'src/app/services/language.service';
import { Experience } from 'src/app/services/models/Experience';
import { Skill } from 'src/app/services/models/Skill';
import { Language } from 'src/app/services/models/Language';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  experiences: Experience[] = [];
  skills: Skill[] = [];
  languages: Language[] = [];

  constructor(
    private experienceService: ExperienceService,
    private skillService: SkillService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.getExperiences();
    this.getSkills();
    this.getLanguages();
  }

  getExperiences() {
    this.experienceService
      .getAllExperiences()
      .subscribe({
           next:(res)=>
           {
            this.experiences = res;
           },
           error:(err) =>
           {
              this.handleError(err)
           }
      });
  }

  getSkills() {
    this.skillService
      .getAllSkills()
      .subscribe({
        next:(res)=>
        {
          this.skills = res;
        },
        error:(err)=>
        {
          this.handleError(err);
        }
      })
  }

  getLanguages() {
    this.languageService
      .getAllLanguages()
      .subscribe({
        next:(res) =>
        {
            this.languages = res
        },
        error:(err)=>
        {
          this.handleError(err);
        }
      })
  }

  private handleError(err: any) {
    console.log('Response Error. Status: ', err.status);
    console.log('Response Error. Status Text: ', err.statusText);
    console.log(err);
  }

  receiveExperience(addedExperience:Experience): void
  {
     this.experiences.push(addedExperience);
  }
}
