# Proxy pattern

With a proxy object, we get more control over the interactions with certain objects. A proxy object can determine the behaviour whenever we're interacting with the object. For example setting or getting values

In general terms a proxy means a stand-in for someone else. instead of speaking with the person directly, we speak to the proxy. The same happens in JavaScript, **Instead of interacting with the target object directly, we'll interact with the proxy**

![Proxy](image.png)

## **Proxy in JavaScript**

In JavaScript creating an Object is relatively easy, creating a new instance of the Proxy class, And JavaScript provide us a Object to manipulate the target Obj easier.

```
  const proxy = new Proxy(targetObj, handler)
```

### Target Object (targetObj)

Is the object that we can intercept with the proxy

### Handler (handler)

In this handler we can define the specific behavior based of the interaction, there are many methods but the most common are **get** and **set**

**get**: Invoked when access to a property
```
//fires the get method in the handler, and return 2 props the Obj, and the 
//property that is accessed

person.name
```

```
  { name: 'JD', age: 34, id: 121333}, 'name'
```

**set**: Invoked when trying to modify a property
```
//fires the set method in the handler, and return 3 props the Obj, the 
//property that is accessed, the new value

person.name = carlos
```


```
  { name: 'JD', age: 34, id: 121333}, 'name', 'carlos'
```


## USE CASES

1 - Add validations, make sure that we weren't modifying the person obj with faulty values.
2 - Formatting values.
3 - Notifications
4 - Debugging

<span style="color: red"><b>Warning: Do not use proxys to handle performance critical code</b></span>