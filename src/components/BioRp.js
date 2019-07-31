import React from 'react';
import {Component} from 'react';

class BioRp extends Component {
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
                        <h5>Biographie und Rollenspielerisches</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <form>
                            <div className="row">
                                <div className="col-6">
                                    <textarea id={'biography'} placeholder={'Biographie eingeben'} type="text" className="form-control" onChange={(event)=>{
                                        this.props.onUpdate(event.target.id, event.target.value); 
                                    }}/> 
                                </div>
                                <div className="col-6">
                                    <textarea id={'roleplay'} placeholder={'Rollenspielerisches eingeben'} type="text" className="form-control" onChange={(event)=>{
                                        this.props.onUpdate(event.target.id, event.target.value); 
                                    }}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default BioRp;