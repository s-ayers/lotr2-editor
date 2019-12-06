import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxFileDropModule } from 'ngx-file-drop';

import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { FileDropComponent } from './file-drop/file-drop.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EditorComponent } from './editor/editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArmoryComponent } from './armory/armory.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    FileDropComponent,
    ToolbarComponent,
    EditorComponent,
    ArmoryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxFileDropModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }