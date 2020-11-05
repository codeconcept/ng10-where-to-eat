import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SugestionFormComponent } from './sugestion-form/sugestion-form.component';

const routes: Routes = [{ path: '', component: SugestionFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
