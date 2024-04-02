import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deptoppers',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './deptoppers.component.html',
  styleUrl: './deptoppers.component.css'
})
export class DeptoppersComponent implements OnInit {
  empObj: any[] = [];
  empObj2: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://freetestapi.com/api/v1/students').subscribe(
      (empObj: any[]) => {
        this.empObj = empObj.slice(0, 50);
        this.processData();
      }
    );
    this.http.get<any>('https://randomuser.me/api/?results=50').subscribe(
      (empObj2: any) => {
        this.empObj2 = empObj2.results;
        this.processImage();
      }
    );
  }

  processData(): void {
    for (let i = 0; i < this.empObj.length; i++) {
      const emp = this.empObj[i]
      const nameElement = document.getElementById("name" + i);
      const emailElement = document.getElementById("email" + i);
      const gpElement = document.getElementById("gp" + i);

      if (nameElement && emailElement && gpElement) {
        
        nameElement.innerText = emp.name;
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

  processImage():void{
    for (let i = 0; i < this.empObj2.length; i++){
      const emp2 = this.empObj2[i]
      var imgElement = document.getElementById("img" + i);
      if(imgElement){
        imgElement.setAttribute("src", emp2.picture.large);
      }
    }
  }
}
