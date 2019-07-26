import React from 'react';
import {Component} from 'react';
import Stammdaten from './components/Stammdaten';
import Distinctions from './components/Distinctions';
import Affiliations from './components/Affiliations';
import PowerSets from './components/PowerSets';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        characterSheet: {
            stammdaten: {

            },
            affiliations: {

            },
            distinctions: {

            },
            powerSets: [

            ]
        }
      }
  }
  updateState(category, field, data){
    let {characterSheet} = this.state;
    characterSheet[category][field] = data;

    this.setState({characterSheet}, ()=>{
      console.log(this.state);
    });
  
  }
  render() {
    return (
      <div id="app">
        <div className="row">
          <div className="col-12">
            <h1>Marvel Character Generator</h1>
          </div>
        </div>
        <Stammdaten onUpdate={(field, data)=>{
            this.updateState("stammdaten", field, data);
        }} />
        <Affiliations onUpdate={(field, data)=>{
            this.updateState("affiliations", field, data);
        }}/>
        <Distinctions onUpdate={(field, data)=>{
            this.updateState("distinctions", field, data);
        }}/>
        <PowerSets onUpdate={(index, data)=>{
            let {characterSheet} = this.state;
            characterSheet["powerSets"][index] = data;
        
            this.setState({characterSheet}, ()=>{
              console.log(this.state);
            });
          
        }}/>
        </div>
    );
  }

}


export default App;
