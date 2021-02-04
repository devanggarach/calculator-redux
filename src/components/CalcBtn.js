import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Col,Button} from 'react-bootstrap'
import { GeneralClick } from '../redux'

export class CalcBtn extends Component {
    render() {
        return (
            <Col className="p-0">
                {/* <Button  onClick={this.props.myfunc}>{this.props.btnVal}</Button> */}
                <Button className="btn btn-block btn-secondary p-0 borderNone mycolor" style={{color:this.props.textClr}} onClick={this.props.myfunc}>{this.props.btnVal}</Button>
            </Col>
        )
    }
}

const mapStateToProps= state=>{
    return{
        userText:state.userText
    }
}
const mapDispatchToProps = dispatch =>{
    console.log("General Click2")
    return{
        GeneralClick:value=>dispatch(GeneralClick(value))
    }
}
export default connect(mapStateToProps,
    mapDispatchToProps)(CalcBtn)