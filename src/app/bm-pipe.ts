import {  Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'ImgFile'})

export class ImgFile implements PipeTransform{
  transform( value ): string {
    return 'i/urls';
  }
}
