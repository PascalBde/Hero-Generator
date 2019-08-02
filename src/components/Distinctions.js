import React from 'react';
import {Component} from 'react';

class Distinctions extends Component {
    constructor(props) {
        super(props);

        this.state = {
          distinction1: "",
          distinction2: "",
          distinction3: ""
        }
    }

    componentWillMount () {
        if(this.props.data) {
            this.setState({
                distinction1: this.props.data.distinction1,
                distinction2: this.props.data.distinction2,
                distinction3: this.props.data.distinction3
            })
        }
    }

    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-12">
                        <h5>Distinctions</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <form>
                            <div className="row">
                                <div className="col-4">
                                    <textarea id={'distinction1'} placeholder={'Text eingeben'} value={this.state.distinction1} type="text" className="form-control" onChange={(event)=>{
                                        this.props.onUpdate(event.target.id, event.target.value); 
                                    }}/> 
                                </div>
                                <div className="col-4">
                                    <textarea id={'distinction2'} placeholder={'Text eingeben'} value={this.state.distinction2} type="text" className="form-control" onChange={(event)=>{
                                        this.props.onUpdate(event.target.id, event.target.value); 
                                    }}/>
                                </div>
                                <div className="col-4">
                                    <textarea id={'distinction3'} placeholder={'Text eingeben'} value={this.state.distinction3} type="text" className="form-control" onChange={(event)=>{
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
export default Distinctions;
