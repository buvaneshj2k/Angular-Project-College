import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MainnavComponent } from './mainnav/mainnav.component';
import { StaffnavComponent } from './staffnav/staffnav.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,MainnavComponent,StaffnavComponent,CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'College';
}
