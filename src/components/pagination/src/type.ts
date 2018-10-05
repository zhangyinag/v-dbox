export class Item {
  type: 'ellipsis' | 'number' = 'number'
  index: number = 1

  constructor (index: number, type?: 'ellipsis' | 'number') {
    this.index = index
    if (type) this.type = type
  }
}
