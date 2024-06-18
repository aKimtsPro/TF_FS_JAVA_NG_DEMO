import {Component, computed, effect, Signal, signal} from '@angular/core';

@Component({
  selector: 'app-pixels',
  templateUrl: './pixels.component.html',
  styleUrl: './pixels.component.scss'
})
export class PixelsComponent {

  selectedColor = signal<string>('red')
  pixels: Array<string | undefined>[] = [
    [undefined,undefined,undefined],
    [undefined,undefined,undefined],
    [undefined,undefined,undefined],
  ]
  height = signal(3)
  width = signal(3)

  size = computed(() => {
    const height = this.height();
    const width = this.width();

    return height * width
  })

  heightAlertEffect = effect(() => {
    const height = this.height();

    if( height >= 8 )
      alert(`Attention ! le tableau ne pourra pas dépasser une hauteur de 10 (${10-height} restant.s)`)
  })

  widthAlertEffect = effect(() => {
    const width = this.width();

    if( width >= 8 )
      alert(`Attention ! le tableau ne pourra pas dépasser une largeur de 10 (${10-width} restant.s)`)
  })

  handleChangeColor(color: string){
    this.selectedColor.set(color)
  }

  handleColorPixel(x: number, y: number) {
    this.pixels[y][x] = this.selectedColor()
  }

  handleAddLine(){
    if( this.height() == 10 )
      return;

    const line = []
    for (let i = 0; i < this.width(); i++) {
      line.push('')
    }
    this.pixels.push(line)

    this.height.update(v => v+1)
  }

  handleAddColumn(){
    if( this.width() == 10 )
      return;

    for (let i = 0; i < this.height(); i++) {
      this.pixels[i].push('')
    }
    this.width.update(v => v+1)
  }

  handleRemoveLine(){
    this.pixels.pop()
    this.height.update(v => v == 0 ? 0 : v-1)
  }

  handleRemoveColumn(){
    for (let i = 0; i < this.height(); i++) {
      this.pixels[i].pop()
    }
    this.width.update(v => v==0 ? 0 : v-1)
  }

}
