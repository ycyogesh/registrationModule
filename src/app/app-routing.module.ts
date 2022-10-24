import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailsentComponent } from './mailsent/mailsent.component';
import { PrimengComponent } from './primeng/primeng.component';

const routes: Routes = [
  {
    path:'mailsent',
    component:MailsentComponent
  },
  {
    path : "prime-components",
    component : PrimengComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
