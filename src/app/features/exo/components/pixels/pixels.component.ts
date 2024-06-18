import {Component, effect, Signal, signal} from '@angular/core';

@Component({
  selector: 'app-pixels',
  templateUrl: './pixels.component.html',
  styleUrl: './pixels.component.scss'
})
export class PixelsComponent {

  selectedColor = signal<string>('red')
  pixels = signal<Array<Array<string | undefined>>>([
    [undefined,undefined,undefined],
    [undefined,undefined,undefined],
    [undefined,undefined,undefined],
  ])

  logEffect = effect(() => {
    console.log(this.pixels())
  })

  handleChangeColor(color: string){
    this.selectedColor.set(color)
  }

  handleColorPixel(x: number, y: number) {
    this.pixels.update(v => {
      const copy = [ ...this.pixels().map(e => [...e]) ]
      copy[x][y] = this.selectedColor()
      return copy
    })
  }

}
