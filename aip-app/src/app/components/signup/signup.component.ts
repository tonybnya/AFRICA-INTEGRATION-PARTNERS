import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      name: [''],
      firstname: [''],
      startup: [''],
      position: [''],
      country: [''],
      email: [''],
      password: ['']
    })
  }

  signUp(): void {
    this.http.post<any>('http://localhost:4200/signupUsers', this.signupForm.value)
      .subscribe((res) => {
        alert('Utilisateur bien enregistré !');
        this.signupForm.reset();
        this.router.navigateByUrl('login');
      });
  }

}
