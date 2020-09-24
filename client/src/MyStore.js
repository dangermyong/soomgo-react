import { observable } from 'mobx'

class MyStore {
  @observable count = 3

  addOne () {
    this.count += 1
  }
}

export default new MyStore()