import {TodoStore} from './todos'
import {LocationStore} from './location'

// export enum StoresEnum {
//     locationStore: 'locationStore',
//     todoStore: 'todoStore'
// }

export class RootStore {
    locationStore: LocationStore
    todoStore: TodoStore
    constructor () {
        this.locationStore = new LocationStore()
        this.todoStore = new TodoStore()
        
    }

}


export const stores = new RootStore()