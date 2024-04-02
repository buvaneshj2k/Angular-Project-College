import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-staffhome',
  standalone: true,
  imports: [HttpClientModule,RouterOutlet,RouterModule],
  templateUrl: './staffhome.component.html',
  styleUrl: './staffhome.component.css'
})
export class StaffhomeComponent implements OnInit {
  empObj: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://freetestapi.com/api/v1/students').subscribe(
      (empObj: any[]) => {
        this.empObj = empObj.slice(0, 10);
        this.processData();
      }
    );
  }

  processData(): void {
    for (let i = 0; i < this.empObj.length; i++) {
      const emp = this.empObj[i];
      const idElement = document.getElementById("id" + i);
      const nameElement = document.getElementById("name" + i);
      const ageElement = document.getElementById("age" + i);
      const genderElement = document.getElementById("gender" + i);
      const courseElement = document.getElementById("course" + i);
      const emailElement = document.getElementById("email" + i);
      const gpElement = document.getElementById("gp" + i);

      if (idElement && nameElement && ageElement && genderElement && courseElement && emailElement && gpElement) {
        idElement.innerHTML = emp.id;
        nameElement.innerHTML = emp.name;
        ageElement.innerHTML = emp.age;
        genderElement.innerHTML = emp.gender;
        courseElement.innerHTML = emp.courses[0];
        emailElement.innerHTML = emp.email;

        const a = emp.gpa;
        if (a < 6 && a >= 5) {
          gpElement.innerHTML = (a + 4).toString();
        } else if (a < 5 && a >= 4) {
          gpElement.innerHTML = (a + 5).toString();
        } else if (a < 4 && a >= 3) {
          gpElement.innerHTML = (a + 6).toString();
        } else if (a < 3 && a >= 2) {
          gpElement.innerHTML = (a + 7).toString();
        } else if (a < 2 && a >= 1) {
          gpElement.innerHTML = (a + 8).toString();
        } else if (a < 1) {
          gpElement.innerHTML = (a + 9).toString();
        }
      }
    }
  }
}