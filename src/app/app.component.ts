import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'demo';

  constructor(private router: Router){}

    goGraph() : void{

      this.router.navigate(['graph']);

    }
  }
