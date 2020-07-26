const display = (state='none',action) => {
    switch (action.type){
        case 'ALERT':
        return action.payload

        default:
            return state
    }
}

export default display;