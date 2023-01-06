
const iceCreamActions = { 
    addIceCream : 'add an ice cream',
    addMoreIceCreams : 'add more than one ice cream'
}


const initialState = { 
    num_of_iceCream : 5
}

const iceCreamReducer = (state = initialState,action) => { 
    switch(action.type){ 
        case iceCreamActions.addIceCream:
            return { 
                num_of_iceCream:state.num_of_iceCream + 1
            }
        case iceCreamActions.addMoreIceCreams:
            return { 
                num_of_iceCream:state.num_of_iceCream + action.payload
            }
            default:
                return state
    }
}

module.exports = iceCreamReducer;
module.exports.iceCreamActions = iceCreamActions