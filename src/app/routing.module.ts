import { NgModule } from "@angular/core";
import { RouterModule, Route} from "@angular/router";
import { HelloComponent } from "./hello.component";
import { DrawerContentComponent } from "./drawer-content/drawer-content.component";
@NgModule({
  imports:[
    RouterModule.forRoot(
      [
        { 
          path: 'pending', // <-- no more prefix
          component: HelloComponent
        },
        { 
          path: 'wishlist', 
          component: DrawerContentComponent
        }    
      ],
      { enableTracing: true } // <-- debugging purposes only
    )
  ], 
  exports:[
    RouterModule
  ]
})
export class RoutingModule{

}
