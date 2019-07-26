import React from 'react';
import {Component} from 'react';

class PowerSets extends Component {
    constructor(props) {
        super(props);

        this.state = {
          countPowerSets: 1,
          powerSets: [],
          powerSetsData: [],
          availableTraits: [
              {
                  name: "Vibro-Shock Blast",
                  dice: 8
              },
              {
                  name: "Enhanced Durability",
                  dice: 10
              },
              {
                  name: "Jumping",
                  dice: 8
              },
              {
                name: "Nochwas",
                dice: 8
              }
          ]
        }

        this.getTrait = this.getTrait.bind(this);
    }

    getTrait(index, traitIndex) {
        let trait = [];
        let {availableTraits} = this.state;

        for(let availableTrait of availableTraits) {
            trait.push(
                <option data-dice={availableTrait.dice} key={availableTrait.name}>{availableTrait.name}</option>
            )
        }        

        return <div className="col-4">
            <select className='form-control' onChange={(event)=>{
                                    let updatedPowerset = this.state.powerSetsData[index];

                                    if(!updatedPowerset) {
                                        updatedPowerset = {
                                            traits: []
                                        }
                                    }
                                    const validDice = [4, 6, 8, 10, 12];
                                    let userDice = prompt("Würfeltyp angeben");
                                    
                                    if(!validDice.includes(parseInt(userDice))) {
                                        userDice = prompt("Bitte gültigen Würfel eingeben (W4, 6, 8, 10, 12)")
                                    }
                                    updatedPowerset.traits[traitIndex] = {name: event.target.value, dice: userDice}
                                    
                                    event.target.selectedOptions[0].innerText += " (W" + userDice + ")";
                                    let updatedPowersets = this.state.powerSetsData;
                                    updatedPowersets[index] = updatedPowerset;
                                    this.setState({
                                        powerSetsData: updatedPowersets
                                    });
                                    this.props.onUpdate(index, updatedPowerset);
        }}>
        <option value="-1" disabled selected>Bitte auswählen</option> 
        {trait}
        </select></div>;
    }
    
   getPowerSet(index) {
        let powerSet;

        if(this.state.powerSets[index]) {
            powerSet = this.state.powerSets[index];
        }
        return(
            <div key={index}>
                <div className="row">
                        <div className="col-10">
                            Power Set {index + 1}
                        </div>
                        <div className="col-2">
                        <button className="btn btn-info" onClick={()=>{
                                    let updatedPowerset = this.state.powerSets[index];
                                   
                                    if(!updatedPowerset) {
                                        updatedPowerset = {
                                            traits: []
                                        }
                                    }
                                    let existingTraits = updatedPowerset.traits.length;

                                    updatedPowerset.traits.push(this.getTrait(index, existingTraits))
                                    
                                    let updatedPowersets = this.state.powerSets;
                                    updatedPowersets[index] = updatedPowerset;
                                    this.setState({
                                        powerSets: updatedPowersets
                                    });
                            }}>+</button>
                        </div>
                        
                </div>

                <div className="row">
                    {powerSet && powerSet.traits}
                </div>
            </div>
        );
       
    }

  
    render() {
        let powerSets = [];

        for(let i=0; i<this.state.countPowerSets; i++) {
            powerSets.push(this.getPowerSet(i));
        }

        return(
            <div>
                <div className="row">
                    <div className="col-10">
                        <h5>Power Sets</h5>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-info" onClick={()=>{
                                this.setState({
                                    countPowerSets: this.state.countPowerSets + 1
                                });
                        }}>+</button>
                    </div>
                </div>
                
                {powerSets}
            
            </div>
        )
    }
}
export default PowerSets;
