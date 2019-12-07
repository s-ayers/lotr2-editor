import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxFileDropModule } from 'ngx-file-drop';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { FileDropComponent } from './file-drop/file-drop.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EditorComponent } from './editor/editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InventoryComponent } from './inventory/inventory.component';
import { ArmoryComponent } from './armory/armory.component';
import { ShireComponent } from './shire/shire.component';
import { ShireGridComponent } from './shire-grid/shire-grid.component';
import { ArmyListComponent } from './army-list/army-list.component';
import { ArmyComponent } from './army/army.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    FileDropComponent,
    ToolbarComponent,
    EditorComponent,
    InventoryComponent,
    ArmoryComponent,
    ShireComponent,
    ShireGridComponent,
    ArmyListComponent,
    ArmyComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxFileDropModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
