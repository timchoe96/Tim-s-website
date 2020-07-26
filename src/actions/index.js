
export const timeChange = (time) => {
    return{
        type:'TIME',
        payload:time
    }
}

export const displayAlert = (display) => {
    return{
        type:'ALERT',
        payload:display
    }
}



