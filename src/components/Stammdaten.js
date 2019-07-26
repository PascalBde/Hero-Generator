import React from 'react';
import {Component} from 'react';

class Stammdaten extends Component {
    constructor(props) {
        super(props);

        this.state = {
          
        }
    }


    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-12">
                        <h5>Allgemein</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <form>
                            <div className="row">
                                <div className="col-4">
                                    <input id={'characterName'} onChange={(event)=>{
                                        this.props.onUpdate("name", event.target.value)
                                    }} placeholder={'Name'} type="text" className="form-control" />
                                </div>
                                <div className="col-4">
                                <input id={'gender'} onChange={(event)=>{
                                        this.props.onUpdate("gender", event.target.value)
                                }} placeholder={'Geschlecht'} type="text" className="form-control" />
                                </div>
                                <div className="col-4">
                                <input id={'age'} onChange={(event)=>{
                                        this.props.onUpdate("age", event.target.value)
                                }} placeholder={'Alter'} type="text" className="form-control" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Stammdaten;
