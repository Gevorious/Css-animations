import * as animals from './animals'

export function getData(prop_name) {
    const data = []
    for(let animal of Object.values(animals)){
        data.push(animal()[prop_name])
    }
    return data
}
