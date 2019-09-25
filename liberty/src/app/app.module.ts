import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WorkingprofessionalsComponent } from './components/workingprofessionals/workingprofessionals.component';
import { TasktableComponent } from './components/tasktable/tasktable.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorkingprofessionalsComponent,
    TasktableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
