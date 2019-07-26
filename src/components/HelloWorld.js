import React from 'react';
import {Component} from 'react';

class HelloWorld extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vorname: this.props.vorname,
            nachname: this.props.nachname
        }
    }

    componentWillMount() {
        console.log("About to mount");
    }
    getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }


    render() {
        const {vorname, nachname} = this.state;

        return(
        <div>
            <div className="row">
                <div className="col-12">
                    <h1 className="text-info">Hallo {vorname} {nachname} !!!</h1>
                    <button className={'btn btn-outline-info'} onClick={()=>{
                        const firstNames = ["Philipp", "Pascal", "Eva", "Batman"];
                        const lastNames = ["Kiszka", "Burg", "Kranz", "Arkam"];
                        console.log(this.getRandomArbitrary(0, firstNames.length), firstNames.length);
                        this.setState({
                            vorname: firstNames[this.getRandomArbitrary(0, firstNames.length - 1)],
                            nachname:  lastNames[this.getRandomArbitrary(0, lastNames.length - 1)]
                        });
                    }}>
                        Change name
                    </button>
                </div>
            </div>
        </div>
        )
    }
}
export default HelloWorld;
