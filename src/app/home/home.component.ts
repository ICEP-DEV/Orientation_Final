import { Component, OnInit } from '@angular/core';
import { SocketioService } from './../socketio.service'
import { CookieService } from 'ngx-cookie-service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  router: any;
  spinnerService: any;

  
  
  constructor(
    private _socketConnection : SocketioService,
    private cookieService: CookieService,
  ) { 

      
  }

  ngOnInit(): void { 
   
  }

  startOr()
  {
  }

  refreshPage() {
    window.location.reload();
   }


}
