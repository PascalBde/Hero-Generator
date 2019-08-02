import React from 'react';
import {Component} from 'react';

class Affiliations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            solo: "",
            buddy: "",
            team: ""
          
        }
    }
componentWillMount() {
    if(this.props.data) {
        this.setState({
            solo: this.props.data.solo,
            buddy: this.props.data.buddy,
            team: this.props.data.team
        });
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
                                    <input type="text" className="form-control" placeholder="Solo" value={this.state.solo} onChange={(event)=>{
                                        this.props.onUpdate("solo", event.target.value); 
                                    }}></input>
                                </div>
                                <div className="col-4">
                                    <input type="text" className="form-control" placeholder="Buddy" value={this.state.buddy} onChange={(event)=>{
                                        this.props.onUpdate("buddy", event.target.value);
                                    }}></input>
                                </div>
                                <div className="col-4">
                                    <input type="text" className="form-control" placeholder="Team" value={this.state.team} onChange={(event)=>{
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
