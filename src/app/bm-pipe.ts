import {  Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'ImgFile'})
export class ImgFile implements PipeTransform {
  transform( value, area ): string {
    if ( !value || !area ) {
      return 'assets/images/banmabang.png';
    }
    const url = 'http://images.snsports.cn/' + value + '?imageView2/1' + area;
    return url;
  }
}

@Pipe({name: 'LiveStateStyle'})
export class LiveStateStyle implements PipeTransform {
  transform( game, type) {
    const ret = {
      color: '',
      label: ''
    };
    if ( game.state === 1 ) {
      ret.color = '#38906B';
      ret.label = '等待开赛';
    } else if ( game.state === 0 ) {
      ret.color = '#38906B';
      ret.label = '正在报名';
    } else if ( game.state === 2 ) {
      ret.label = game.stateDesc;
      ret.color = '#CF2F30';
    } else if ( game.state === 3 ) {
      ret.label = game.stateDesc;
    }
    if ( type === 'content' ) {
      return ret.label;
    } else if ( type === 'color' ) {
      return ret.color;
    } else {
      return ret;
    }
  }
}
