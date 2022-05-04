import { Injectable } from '@angular/core';
import { FileService } from './file.service';

@Injectable({
  providedIn: 'root'
})
export class MapNameServiceService {

  constructor(private fileService: FileService) { }
}
