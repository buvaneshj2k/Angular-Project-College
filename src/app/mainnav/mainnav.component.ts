import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mainnav',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './mainnav.component.html',
  styleUrl: './mainnav.component.css'
})
export class MainnavComponent {

}
