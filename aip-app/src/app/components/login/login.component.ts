import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  login(): void {
    this.http.post<any>('http://localhost:4200/signupUsers', this.loginForm.value)
      .subscribe((res) => {
        const user = res.find((answer: any) => {
          return answer.email === this.loginForm.value.email && answer.password === this.loginForm.value.password;
      });

        if (user) {
          alert("Connexion réussie !");
          this.loginForm.reset();
          this.router.navigateByUrl('home');
        }
        else {
          alert("Bien vouloir créer un compte !");
        }
    })
  }

}
