import {CLICK_EQUAL,GENERAL_CLICK,CLEAR} from './calculatorTypes'
export const ClickEqual=()=>{
    return{
        type:CLICK_EQUAL
    }
}
export const Clear=(value=0)=>{
    return{
        type:CLEAR,
        payload:value
    }
}
export const GeneralClick=()=>{
    return{
        type:GENERAL_CLICK
        
    }
}