const _ = require('lodash');


const object1 = {
    'name': 'Raúl',
    'apellido': 'Artiles',
    'edad': 27,
    'dirección': {
        'tipo': 'calle',
        'numero': 36
    }
}
const objValues = _.map(object1, (element) => {if(element){ return element}})
console.log(objValues)

const object2 = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9:9,
    10:10
}
const sum = _.reduce(object2, (acc,element) => {if(element) return acc+element})
console.log(sum)

const originalObject = {
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'Anytown'
    }
}
const clone = _.cloneDeep(originalObject)
clone.name = 'Pepe El Loco'
console.log(clone)
console.log(originalObject)


const users = {
    {user: 'ramon'}
}