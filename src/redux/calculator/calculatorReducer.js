

import { CLEAR , CLICK_EQUAL,GENERAL_CLICK} from './calculatorTypes'
const initialState={
    userText:0
}
const calculatorReducer=(state=initialState,action)=>{
    switch(action.type){
        case CLEAR: 
        return{
            ...state,
            userText:action.payload
        }
        case CLICK_EQUAL:
        return{
            userText:eval(state.userText)
        }
        case GENERAL_CLICK: 
            if(state.initialState===0 || state.initialState==='' || state.initialState==='0' ||state.initialState==='Error'){
                console.log("General Click")
                state.initialState= action.payload
                return{
                    userText:state.initialState
                }
            }
            else{
                state.initialState= state.initialState+action.payload
                return{
                    userText:state.initialState
                }
            }
        default: return state
    }
}
export default calculatorReducer