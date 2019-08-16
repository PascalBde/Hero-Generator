import React from 'react';
import {Component} from 'react';

class Milestones extends Component {
    constructor(props) {
        super(props);

        this.state = {
          countMilestones: 2,
          mile1XP1: "",
          mile3XP1: "",
          mile10XP1: "",
          mile1XP2: "",
          mile3XP2: "",
          mile10XP2: ""
        }
    }

    componentWillMount() {
        if(this.props.data) {
            this.setState({
                mile1XP1: this.props.data.mile1XP1,
                mile3XP1: this.props.data.mile3XP1,
                mile10XP1: this.props.data.mile10XP1,
                mile1XP2: this.props.data.mile1XP2,
                mile3XP2: this.props.data.mile3XP2,
                mile10XP2: this.props.data.mile10XP2
            });
        }
    }

    componentWillReceiveProps(nextProps, nextState) {
        if(nextProps.data.mile1XP1 !== this.state.mile1XP1) {
            this.setState({mile1XP1: nextProps.data.mile1XP1});
        }
        if(nextProps.data.mile3XP1 !== this.state.mile3XP1) {
            this.setState({mile3XP1: nextProps.data.mile3XP1});
        }
        if(nextProps.data.mile10XP1 !== this.state.mile10XP1) {
            this.setState({mile10XP1: nextProps.data.mile10XP1});
        }
        if(nextProps.data.mile1XP2 !== this.state.mile1XP2) {
            this.setState({mile1XP2: nextProps.data.mile1XP2});
        }
        if(nextProps.data.mile3XP2 !== this.state.mile3XP2) {
            this.setState({mile3XP2: nextProps.data.mile3XP2});
        }
        if(nextProps.data.mile10XP2 !== this.state.mile10XP2) {
            this.setState({mile10XP2: nextProps.data.mile10XP2});
        }
    }
    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-12">
                        <h5>Milestone 1</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <form>
                            <div className="row">
                                <label htmlFor="milestone1XP1">1 XP:</label>
                                <div className="col-10">
                                    <input id={'milestone1XP1'} onChange={(event)=>{
                                        this.props.onUpdate("mile1XP1", event.target.value)
                                    }} placeholder={'Beschreibung eingeben'} value={this.state.mile1XP1} type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="milestone1XP3">3 XP:</label>
                                <div className="col-10">                               
                                <input id={'milestone1XP3'} onChange={(event)=>{
                                        this.props.onUpdate("mile3XP1", event.target.value)
                                }} placeholder={'Beschreibung eingeben'} value={this.state.mile3XP1} type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="milestone1XP10">10 XP:</label>
                                <div className="col-10">                                
                                <input id={'milstone1XP10'} onChange={(event)=>{
                                        this.props.onUpdate("mile10XP1", event.target.value)
                                }} placeholder={'Beschreibung eingeben'} value={this.state.mile10XP1} type="text" className="form-control" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h5>Milestone 2</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <form>
                            <div className="row">
                                <label htmlFor="milestone2XP1">1 XP:</label>
                                <div className="col-10">
                                    <input id={'milestone1XP1'} onChange={(event)=>{
                                        this.props.onUpdate("mile1XP2", event.target.value)
                                    }} placeholder={'Beschreibung eingeben'} value={this.state.mile1XP2} type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="milestone2XP3">3 XP:</label>
                                <div className="col-10">                               
                                <input id={'milestone1XP3'} onChange={(event)=>{
                                        this.props.onUpdate("mile3XP2", event.target.value)
                                }} placeholder={'Beschreibung eingeben'} value={this.state.mile3XP2} type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="milestone2XP10">10 XP:</label>
                                <div className="col-10">                                
                                <input id={'milstone1XP10'} onChange={(event)=>{
                                        this.props.onUpdate("mile10XP2", event.target.value)
                                }} placeholder={'Beschreibung eingeben'} value={this.state.mile10XP2} type="text" className="form-control" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Milestones;
