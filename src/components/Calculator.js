import React, { Component } from 'react'
// import {connect} from 'react-redux'
import {ClickEqual,Clear,GeneralClick} from '../redux'
import {Button,Form, Row,Container,Col} from 'react-bootstrap'
import CalcBtn from './CalcBtn'
export class Calculator extends Component {
    render() {
        return (
            <div>
                <h1>Calculator</h1>
                <Container>
                    <Row>
                        <Col md={{span:4,offset:4}}  className="p-0">
                            <Form>
                                <Form.Control type="text" disabled className="textRight" id="calc" placeholder="0" value={this.props.userText}/>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{span:4,offset:4}}>
                            <Row>
                                <Col className="p-0">
                                    <Button className="btn btn-block btn-secondary borderNone p-0 m-0 mycolor" onClick={()=>Clear()}>Clear</Button>
                                </Col>
                            </Row>
                            <Row>
                                <CalcBtn myfunc={()=>GeneralClick('7')} btnVal="7"/>
                                <CalcBtn myfunc={()=>GeneralClick('8')} btnVal="8"/>
                                <CalcBtn myfunc={()=>GeneralClick('9')} btnVal="9"/>
                                <CalcBtn myfunc={()=>GeneralClick('/')} btnVal="/" color="gold" textClr="#0275d8"/>
                            </Row>
                            <Row>
                                <CalcBtn myfunc={()=>GeneralClick('4')} btnVal="4"/>
                                <CalcBtn myfunc={()=>GeneralClick('5')} btnVal="5"/>
                                <CalcBtn myfunc={()=>GeneralClick('6')} btnVal="6"/>
                                <CalcBtn myfunc={()=>GeneralClick('*')} btnVal="*" color="gold" textClr="#0275d8"/>
                            </Row>
                            <Row>
                                <CalcBtn myfunc={()=>GeneralClick('1')} btnVal="1"/>
                                <CalcBtn myfunc={()=>GeneralClick('2')} btnVal="2"/>
                                <CalcBtn myfunc={()=>GeneralClick('3')} btnVal="3"/>
                                <CalcBtn myfunc={()=>GeneralClick('-')} btnVal="-" color="gold" textClr="#0275d8"/>
                            </Row>
                            <Row>
                                <CalcBtn myfunc={()=>GeneralClick('0')} btnVal="0"/>
                                <CalcBtn myfunc={()=>GeneralClick('.')} btnVal="."/>
                                <CalcBtn myfunc={()=>ClickEqual()} btnVal="=" color="orange" textClr="#0275d8"/>
                                <CalcBtn myfunc={()=>GeneralClick('+')} btnVal="+" color="gold" textClr="#0275d8"/>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            
            </div>
        )
    }
}

export default Calculator