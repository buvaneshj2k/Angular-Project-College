import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }
  formData = {
    name:'',
    dob:'',
    email:'',
    contact:'',
    father_name:'',
    mother_name:'',
    father_contact:'',
    mother_contact:'',
    tenth_mark:'',
    twelth_mark:'',
    maths_mark:'',
    physics_mark:'',
    chemistry_mark:'',
    acknowledgementNumber:''
  };
  onSubmit() {
    console.log(this.formData);
    this.router.navigate(['/']);
    alert('Form submitted successfully!\nkindly note your acknowledgement number:\n' + this.formData.acknowledgementNumber);
  }
  generateAcknowledgementNumber() {
    var currentDate = new Date();
    var timestamp = currentDate.getTime();
    var randomDigits = Math.floor(Math.random() * 10000);
    this.formData.acknowledgementNumber = "ACK" + timestamp + randomDigits;
  }
  
}
