import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Lotr2 } from 'src/model/Lotr2.model';
import { FileService } from '../services/file.service';

// import {TreeModule} from 'primeng/tree';
import {TreeNode} from 'primeng/api';


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  subscription: Subscription;
  game: Lotr2;

  nodes: TreeNode[] = [];

  constructor(private service: FileService) { }

  ngOnInit() {

    this.subscription = this.service.getActive().subscribe(file => {

      if (file.hasOwnProperty('data')) {
        this.nodes = [];
        this.game = new Lotr2(file.data);

        for(const [key, value] of Object.entries(this.game.children)) {
          this.nodes.push(this.buildNode(key, value));
        }
        this.nodes.sort((a: any, b: any) => {
          return (a.offset > b.offset) ? 1 : -1;
        })
      }

    });

  }

  protected buildNode(key, value) {


    let label = key;
    if (value.hasOwnProperty('value')) {
      if (value.label !== undefined) {
        label += ': ' + value.label;
      } else {
        label += ': ' + value.value;
        if (typeof value.knownPercent === 'function') {
          label +=  ' ' + value.knownPercent();
        }
      }

    }

    const children = [];
    if (value.hasOwnProperty('children')) {
      for(const [k, va] of Object.entries(value.children)) {
        children.push(this.buildNode(k, va)) ;
      }
      children.sort((a, b) => {
        return (a.offset > b.offset) ? 1 : -1;
      })
    }

    const node = {
      label: label,
      offset: value.offset,
      // "data": "Documents Folder",
      // "expandedIcon": "pi pi-folder-open",
      // "collapsedIcon": "pi pi-folder",
      children: children

    };

    return node;
  }

  public calculateHeight(property: string) {
    if (this.game) {
      const height = (this.game.children[property].size / this.game.size) * 100;

      return height + '%';
    }
  }

  public calculateTop(property: string) {
    if (this.game) {
      const top = (this.game.children[property].offset / this.game.size) * 100;

      return top + '%';
    }
  }

  public percent() {
    if ( this.game) {
      return ((this.game.knownBytes() / this.game.size) * 100).toFixed(2);
    }
  }

  regionPercent() {
    if ( this.game) {
      return this.game.regionPercent();
    }
  }
}
