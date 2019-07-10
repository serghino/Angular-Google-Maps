import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Material
import { MaterialModule } from './material.module';
import { MapComponent } from './components/map/map.component';

// Angular Google Maps
import { AgmCoreModule } from '@agm/core';
import { MapEditComponent } from './components/map/map-edit.component';

// Reactive Form
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  entryComponents : [
    MapEditComponent
  ],
  declarations: [
    AppComponent,
    MapComponent,
    MapEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_API_KEY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
