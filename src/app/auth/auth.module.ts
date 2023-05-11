import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth.component";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    FormsModule,
    SharedModule,
    RouterModule.forChild(
      [{path: 'auth', component: AuthComponent}]
    )
  ]
})
export class AuthModule {

}