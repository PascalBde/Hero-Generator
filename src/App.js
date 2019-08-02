import React from 'react';
import {Component} from 'react';
import Stammdaten from './components/Stammdaten';
import Distinctions from './components/Distinctions';
import Affiliations from './components/Affiliations';
import PowerSets from './components/PowerSets';
import Specialities from './components/Specialities';
import BioRp from './components/BioRp';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

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
              {}
            ],
            specialities: [
              
            ],
            biorp: {

            }
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
            <h1>Marvel Character Generator!</h1>
          </div>
        </div>
        <Tabs>
          <TabList>
            <Tab>Allgemein</Tab>
            <Tab>Affiliations</Tab>
            <Tab>Distinctions</Tab>
            <Tab>Power Sets</Tab>
            <Tab>Specialities</Tab>
            <Tab>Biographie</Tab>
          </TabList>
        <TabPanel>  
          <Stammdaten onUpdate={(field, data)=>{
              this.updateState("stammdaten", field, data);
          }} />
        </TabPanel>
        <TabPanel>  
          <Affiliations onUpdate={(field, data)=>{
              this.updateState("affiliations", field, data);
          }}/>
        </TabPanel>
        <TabPanel>
          <Distinctions onUpdate={(field, data)=>{
              this.updateState("distinctions", field, data);
          }}/>
        </TabPanel>
        <TabPanel>
          <PowerSets characterSheet={this.state.characterSheet} onUpdate={(field, data)=>{
              this.updateState("powerSets", field, data);
          }}/>
        </TabPanel>
        <TabPanel>
          <Specialities onUpdate={(index, data)=>{
              let {characterSheet} = this.state;
              characterSheet["specialities"][index] = data;

              this.setState({characterSheet}, ()=>{
              console.log(this.state)});
          }}/>
        </TabPanel>
        <TabPanel>
          <BioRp onUpdate={(field, data)=>{
              this.updateState("biorp", field, data);
          }}/>
        </TabPanel>
        </Tabs>
        
        </div>
    );
  }

}


export default App;
