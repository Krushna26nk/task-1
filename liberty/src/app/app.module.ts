import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WorkingprofessionalsComponent } from './components/workingprofessionals/workingprofessionals.component';
import { TasktableComponent } from './components/tasktable/tasktable.component';
import { ManageticketsComponent } from './components/managetickets/managetickets.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LinegraphComponent } from './components/linegraph/linegraph.component';
import { BargraphComponent } from './components/bargraph/bargraph.component';
import { AreagraphComponent } from './components/areagraph/areagraph.component';
import { GraphcontaineComponent } from './components/graphcontaine/graphcontaine.component';
import { UpdatesComponent } from './components/updates/updates.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorkingprofessionalsComponent,
    TasktableComponent,
    ManageticketsComponent,
    ProfileComponent,
    LinegraphComponent,
    BargraphComponent,
    AreagraphComponent,
    GraphcontaineComponent,
    UpdatesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
