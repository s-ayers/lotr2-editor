import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxFileDropModule } from 'ngx-file-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { FileDropComponent } from './file-drop/file-drop.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { EditorComponent } from './editor/editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ArmoryComponent } from './components/armory/armory.component';
import { ShireComponent } from './components/shire/shire.component';
import { ShireGridComponent } from './components/shire-grid/shire-grid.component';
import { ArmyListComponent } from './components/army-list/army-list.component';
import { ArmyComponent } from './components/army/army.component';
import { CountyListComponent } from './components/county-list/county-list.component';
import { DiffComponent } from './diff/diff.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { TreeComponent } from './tree/tree.component';

import { TreeModule } from 'primeng/tree';
import { TableModule } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';

const routes: Routes = [
  { path: 'edit', component: EditorComponent },
  { path: 'diff', component: DiffComponent },
  { path: 'tree', component: TreeComponent },
  { path: '*', component: DiffComponent }
];

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
    ArmyComponent,
    CountyListComponent,
    DiffComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxFileDropModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    TreeModule,
    TableModule,
    HttpClientModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    PrimeNGConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
