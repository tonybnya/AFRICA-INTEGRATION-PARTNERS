import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  sendMessage(): void {
    const { name, email, phone, society, position, source, country, message } = this.form.value;
    alert(`Name: ${name}, Email: ${email}, Message: ${message} `);
    alert(`Phone: ${phone}, Society: ${society}, position: ${position} `);
    alert(`Source: ${source}, Country: ${country} `);
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control(null),
      email: this.formBuilder.control(null),
      phone: this.formBuilder.control(null),
      society: this.formBuilder.control(null),
      position: this.formBuilder.control(null),
      source: this.formBuilder.control(null),
      country: this.formBuilder.control(null),
      message: this.formBuilder.control(null)
    });
  }

}
