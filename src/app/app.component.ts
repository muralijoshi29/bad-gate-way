import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacadeService} from 'src/app/facade/facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'bad-gate-way';

  constructor( private route: ActivatedRoute, private _facadeService: FacadeService) {

  }
   ngOnInit(){
    let context = this;

    window.addEventListener("beforeunload", function (e) {​​​​

      context.logoutOnClose();

    }​​​​);
   }

   logoutOnClose(){​​​​
     this._facadeService.logOut().subscribe(data => {​​​​
      sessionStorage.clear();
  }​​​​);

}​​​​


}
