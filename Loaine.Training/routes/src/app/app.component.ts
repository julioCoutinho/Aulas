import { AuthService } from './login/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routes';

  showMenu = false;

  constructor (
    private _authService: AuthService
  ) {}

  ngOnInit(){
    this._authService.showMenuEmitter.subscribe(
      mostrar => this.showMenu = mostrar
    );
  }
}
