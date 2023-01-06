
const intialState = { 
    numOfCakes:10
}


const cakeActions  = { 
    AddCake:'add a cake',
    AddMoreCakes:'add more than one cake'
} 


const cakeReducer = (state = intialState,action) => { 
    switch(action.type){ 
        case cakeActions.AddCake: 
        return { 
            numOfCakes:state.numOfCakes + 1
        }
        case cakeActions.AddMoreCakes:
            return { 
                numOfCakes:state.numOfCakes + action.payload
            }
        default:
            return state

    }
}




module.exports = cakeReducer
module.exports.cakeActions = cakeActions