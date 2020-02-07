import React from 'react';
import {Component} from 'react';

class Stammdaten extends Component {
    constructor(props) {
        super(props);

        this.state = {
          name: "",
          gender: "",
          age: "",
          users: []
        }
    }
    request = async (url) => {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }

    async componentWillMount() {
        let allUsers = await this.request("http://localhost/pascal/user.php/showAll");  
        this.setState({users: allUsers.items});  
    }

    componentWillReceiveProps(nextProps, nextState) {
        if(nextProps.data.name !== this.state.name) {
            this.setState({name: nextProps.data.name});
        }
        if(nextProps.data.gender !== this.state.gender) {
            this.setState({gender: nextProps.data.gender});
        }
        if(nextProps.data.age !== this.state.age) {
            this.setState({age: nextProps.data.age});
        }
    }
    render() {
        const {users} = this.state;       
        return(
            <div>
                <div className="row">
                    <div className="col-12">
                        <h5>Allgemein</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul>
                        {users.length > 0 && users.map((user)=>{
                            return <li>{user.name}</li>
                        })}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <form>
                            <div className="row">
                                <div className="col-4">
                                    <input id={'characterName'} onChange={(event)=>{
                                        this.props.onUpdate("name", event.target.value)
                                    }} placeholder={'Name'} value={this.state.name} type="text" className="form-control" />
                                </div>
                                <div className="col-4">
                                <input id={'gender'} onChange={(event)=>{
                                        this.props.onUpdate("gender", event.target.value)
                                }} placeholder={'Geschlecht'} value={this.state.gender} type="text" className="form-control" />
                                </div>
                                <div className="col-4">
                                <input id={'age'} onChange={(event)=>{
                                        this.props.onUpdate("age", event.target.value)
                                }} placeholder={'Alter'} value={this.state.age} type="text" className="form-control" />
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
