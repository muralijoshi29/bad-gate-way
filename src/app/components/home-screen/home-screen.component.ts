import { Component, OnInit } from '@angular/core';
import { FacadeService } from 'src/app/facade/facade.service';
@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(private _facadeService: FacadeService) { }

  ngOnInit() {
  }
  chatBotOpen() {
    this._facadeService.chatBotOpen().subscribe()

  }

}
