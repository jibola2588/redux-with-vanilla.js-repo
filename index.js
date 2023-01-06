const store = require('./store')
const cakeActions = require('./cakes/cake').cakeActions
const iceCreamActions = require('./iceCream/iceCream').iceCreamActions
 

const addCake = () => { 
    return { 
        type:cakeActions.AddCake
    }
}

const addMoreCake = (value) => { 
    return { 
        type:cakeActions.AddMoreCakes,
        payload:value
    }
}

const addIceCream = () => { 
    return { 
        type:iceCreamActions.addIceCream
    }
}

const addIceMoreCream = (value) => { 
    return { 
        type:iceCreamActions.addMoreIceCreams,
        payload:value
    }
}


console.log(store.getState())
const unSubscribe = store.subscribe(() => { 
    console.log(store.getState())
})
store.dispatch(addCake())
store.dispatch(addIceCream())
store.dispatch(addMoreCake(10))
store.dispatch(addIceMoreCream(20))
store.dispatch(addCake())
store.dispatch(addIceCream())
unSubscribe()