import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { BaseService } from '../../shared/services/base.service';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    constructor(private BaseService: BaseService) { }


    ngOnInit() {
        this.showConfig()

    }

    showConfig() {
        var res
        this.BaseService.getConfig()
          .subscribe(response => {
             setTimeout(() => {
            res=response;
            console.log(res)
               }, 1000);
        },
         err => {
        
             
         },
         () => {}
          
        )
      }
}
