const init = {
    cars: ['BMW']
}

export default function reducer(state = init, action, args){
    console.log(action,args)
    switch (action){
        case 'add':
            const newCar= args
            return{
                ...state, 
                cars: [...state['cars'], newCar]
            }
        default:
            return state
    }
}