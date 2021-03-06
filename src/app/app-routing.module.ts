import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { HomeComponent } from './components/home/home.component';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';
import { AdvertisementDetailsComponent } from './components/advertisement-details/advertisement-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationCompleteComponent } from './components/registration-complete/registration-complete.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data:
      {
        breadcrumbs: 'Home'
      },
  },
  {
    path: 'vehicles',
    component: VehicleComponent,
    data: {
      breadcrumbs: 'Vehicles'
    },
    children:
      [
        {
          path: ':id',
          component: VehicleComponent,
          data: {
            breadcrumbs: true,
            text: "Details"
          }
        }
      ]
  },
  {
    path: 'advertisement-details/:id',
    component: AdvertisementDetailsComponent,
    data:
      {
        breadcrumbs: true,
        text: "Advertisement Details"
      }
  },
  {
    path: 'login',
    component: LoginComponent,
    data:
      {
        breadcrumbs: false
      }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data:
      {
        breadcrumbs: false
      }
  },
  {
    path: 'registration-confirmation/:id',
    component: RegistrationCompleteComponent,
    data:{
      breadcrumbs: false
    }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), McBreadcrumbsModule.forRoot()],
  exports: [RouterModule, McBreadcrumbsModule]
})

export class AppRoutingModule { }
