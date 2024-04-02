import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-staffnav',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './staffnav.component.html',
  styleUrl: './staffnav.component.css'
})
export class StaffnavComponent {

}
