import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
 


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecordsComponent } from './records/records.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MomentJalaaliPipe } from './CustomPipe/moment-jalaali.pipe';
import { BribeComponent } from './bribe/bribe.component';


const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'bribe',component:BribeComponent},
  {path:'records',component:RecordsComponent},
  {path:'profile',component:ProfileComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecordsComponent,
    CartComponent,
    HomeComponent,
    ProfileComponent,
    MomentJalaaliPipe,
    BribeComponent
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
