import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentWithOnPushComponent } from './child-with-internal-state/parent-with-on-push/parent-with-on-push.component';
import { ChildWithInternalStateComponent } from './child-with-internal-state/child-with-internal-state/child-with-internal-state.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentWithOnPushComponent,
    ChildWithInternalStateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
