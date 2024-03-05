import { AuthService } from './auth.service';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login';
  authService = inject(AuthService);

  constructor(){
    this.authService.login({
      username: 'kminchelle',
      password: '0lelplR'

    })
    .subscribe((r)=> console.log(r));
  }
}
