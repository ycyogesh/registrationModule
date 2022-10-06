import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailsentComponent } from './mailsent/mailsent.component';

const routes: Routes = [
  {
    path:'mailsent',
    component:MailsentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
