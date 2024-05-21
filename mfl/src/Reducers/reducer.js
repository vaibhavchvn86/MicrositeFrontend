const iState = {
    selectedCardData: [],
    screenSize:window.innerWidth
}
const Reducers = (state = iState, action) => {

    switch (action.type) {
        case 'TEST_DATA':
            return {
                ...state,
                selectedCardData: action.payload
            }
        case 'SCREEN_SIZE':
            return{
                ...state,
                screenSize:action.payload
            }
        default:
            return state
    }
}

export default Reducers;