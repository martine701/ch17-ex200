import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PepperoniComponent } from './app.component';
import { OtherComponent } from './other-component/other-component.component';
import { NestedPastaComponent, NestedCalzoneComponent } from './other-component/other-component.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pepperoni',
    pathMatch:'full'
  },
  {
    path: 'pepperoni',
    component:PepperoniComponent
  },
  {
    path: 'other',
    component: OtherComponent,
    children: [
      {
        path: '',
        redirectTo: 'pasta',
        pathMatch:'full'
      },
      {
        path: 'pasta',
        component:NestedPastaComponent
      },
      {
        path: 'calzone',
        component:NestedCalzoneComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
