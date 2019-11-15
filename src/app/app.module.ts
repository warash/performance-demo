import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentWithOnPushComponent } from './child-connected-to-state/parent-with-on-push/parent-with-on-push.component';
import { ConnectedChild } from './child-connected-to-state/connected-child/connected-child.component';
import { NevParentComponent } from './native-element-events/nev-parent/nev-parent.component';
import { NevChildrenComponent } from './native-element-events/nev-children/nev-children.component';
import { GrandparentChangingStateComponent } from './child-connected-to-state/grandparent-changin-state/grandparent-changing-state.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentWithOnPushComponent,
    ConnectedChild,
    NevParentComponent,
    NevChildrenComponent,
    GrandparentChangingStateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
