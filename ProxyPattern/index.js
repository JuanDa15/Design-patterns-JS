const person = {
  name: 'Juan David',
  age: 42,
  nationality: 'Mexican'
}

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`the value of the prop ${prop} is ${obj[prop]}`)
  },
  set: (obj, prop, value) => {
    console.log(`Changed prop ${prop} from ${obj[prop]} to ${value}`)
    // way one to manipulate the target
    // obj[prop] = value
    // way two to manipulate the target
    return Reflect.set(obj, prop, value)
  }
})

personProxy.age
personProxy.age = 23