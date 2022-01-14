import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Game } from 'src/model/Game.model';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  game: any;
  map: number;
  active = 1;

  constructor(private fb: FormBuilder, private service: FileService) {}

  ngOnInit() {
    this.service.getActive().subscribe(file => {
      if (file.hasOwnProperty('data')) {
        this.game = Game.Parse(file.data);

        this.map = this.game.map.children['Map Name'].value;
      }
    });

  }
}
