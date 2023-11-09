# Singleton pattern with React

Singleton pattern consist in a class that can be instantiated once and can be accessed globally to the same instance. If the instance is not created yet, it would create it, stored and returned

![Singleton pattern schema](/src/assets/img/image.png)

## Advantages

1 - Restricting the instantiation to just one instance could potentially save  a lot of memory space, the reason is because instead of having to setup the memory for a new instance every time, we only have to setup once and only reference throughout the application

![Singleton memory schema](image.png)

## Disadvantages

1 - Some people consider Singletons as an anti-pattern and can be avoid to implement in JavaScript 

## Use cases

1 - Manage global state in an application

### Important

The class implementation used in this example is actually an overkill. Since we can create Objects directly.

Using a simple object we can achieve the same result, see **CounterSingleton3** file in Services.

This is posible because in JavaScript Object are passed by Reference so, when we import the object we are pointing to the same memory space

## Test

When testing singletons is important the order of the test, because all the test will modify the same instance, so if the order is not correct can lead to an entire test suite failing.