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
import { save } from 'save-file'

import SaveIcon from 'react-feather/dist/icons/download-cloud';

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
            powerSetsJsx: [

            ],
            specialities: [
              
            ],
            biorp: {

            }
        }
      }
      console.log(this.state);
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
        <button className={'btn btn-info'} onClick={async ()=>{
          let {characterSheet} = this.state;

          await save(characterSheet.stammdaten.name + '.char', JSON.stringify(characterSheet)); 
        }
        }><SaveIcon/></button>

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
          <Stammdaten 
          data={this.state.characterSheet.stammdaten}
          onUpdate={(field, data)=>{
              this.updateState("stammdaten", field, data);
          }} />
        </TabPanel>
        <TabPanel>  
          <Affiliations
          data={this.state.characterSheet.affiliations} 
          onUpdate={(field, data)=>{
              this.updateState("affiliations", field, data);
          }}/>
        </TabPanel>
        <TabPanel>
          <Distinctions 
          data={this.state.characterSheet.distinctions}
          onUpdate={(field, data)=>{
              this.updateState("distinctions", field, data);
          }}/>
        </TabPanel>
        <TabPanel>
          <PowerSets 
          powerSets={this.state.characterSheet.powerSetsJsx} 
          powerSetsData={this.state.characterSheet.powerSets}
          onUpdate={(field, data)=>{
              this.updateState("powerSets", field, data);
          }}
          onTraitAdded={(field, data)=>{
            this.updateState("powerSetsJsx", field, data);
          }}/>
        </TabPanel>
        <TabPanel>
          <Specialities 
          specialities={this.state.characterSheet.specialities}
          onUpdate={(index, data)=>{
              let {characterSheet} = this.state;
              characterSheet["specialities"][index] = data;

              this.setState({characterSheet}, ()=>{
              console.log(this.state)});
          }}/>
        </TabPanel>
        <TabPanel>
          <BioRp 
          data={this.state.characterSheet.biorp}
          onUpdate={(field, data)=>{
              this.updateState("biorp", field, data);
          }}/>
        </TabPanel>
        </Tabs>
        </div>
    );
  }

}


export default App;
