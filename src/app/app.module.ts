import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component/my-component.component';
import { MyComponent } from './my/my.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
