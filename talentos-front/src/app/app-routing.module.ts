import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'nivel',
    loadChildren: () => import('./module/nivel/nivel.module').then(m => m.NivelModule)
  },
  {
    path: 'desenvolvedor',
    loadChildren: () => import('./module/developer/developer.module').then(m => m.DeveloperModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
