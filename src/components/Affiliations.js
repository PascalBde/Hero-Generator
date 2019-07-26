import React from 'react';
import {Component} from 'react';

class Affiliations extends Component {
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
                        <h5>Affiliations</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <form>
                            <div className="row">
                                <div className="col-4">
                                    <input type="text" className="form-control" placeholder="Solo" onChange={(event)=>{
                                        this.props.onUpdate("solo", event.target.value); 
                                    }}></input>
                                </div>
                                <div className="col-4">
                                    <input type="text" className="form-control" placeholder="Buddy" onChange={(event)=>{
                                        this.props.onUpdate("buddy", event.target.value);
                                    }}></input>
                                </div>
                                <div className="col-4">
                                    <input type="text" className="form-control" placeholder="Team" onChange={(event)=>{
                                        this.props.onUpdate("team", event.target.value);
                                    }}></input>
                                 </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Affiliations;
