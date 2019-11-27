import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import{HttpClientModule} from'@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import{FormsModule}from'@angular/forms';
import { LoginComponent } from './login/login.component'//Formsmodule is wrapper.you will get ngmodel and ngForms too.(no need to write here)
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    RegisterComponent,
    ContactComponent,
    EditComponent,
    DeleteComponent,
   NotfoundComponent,
   LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
 
    RouterModule.forRoot([
      {path:"", component:HomeComponent,canActivate:[AuthService]}, 
      {path:"home", component:HomeComponent,canActivate:[AuthService]},
      {path:"register", component:RegisterComponent,canActivate:[AuthService]},
      {path:"edit/:No", component:EditComponent,canActivate:[AuthService]}, //No and No which we fetch from service(no relation with db)
      {path:"delete/:No", component:DeleteComponent,canActivate:[AuthService]},
      
     {path:"login",component:LoginComponent},  
     {path:"contact", component:ContactComponent},
     {path:"aboutus", component:AboutusComponent},
     {path:"**", component:HomeComponent}
    ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
