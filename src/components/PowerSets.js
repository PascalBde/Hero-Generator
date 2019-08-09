import React from 'react';
import {Component} from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

class PowerSets extends Component {
    constructor(props) {
        super(props);

        this.state = {
          countPowerSets: this.props.powerSetsData.length  || 1,
          powerSets: [],
          powerSetsData: this.props.powerSetsData || [],
          availableTraits: [
              {
                  name: "Attack"
              },
              {
                  name: "Durability"
              },
              {
                  name: "Elemental Control Air"
              },
              {
                  name: "Elemental Control Cosmic"
              },
              {
                  name: "Elemental Control Darkforce"
              },
              {
                  name: "Elemental Control Earth"
              },
              {
                  name: "Elemental Control Electric"
              },
              {
                  name: "Elemental Control Fire/Heat"
              },
              {
                  name: "Elemental Control Gravity"
              },
              {
                  name: "Elemental Control Ice/Cold"
              },
              {
                  name: "Elemental Control Kinetic/Telekinetic"
              },
              {
                  name: "Elemental Control Light"
              },
              {
                  name: "Elemental Control Magnetic"
              },
              {
                  name: "Elemental Control Sonic"
              },
              {
                  name: "Elemental Control Technology"
              },
              {
                  name: "Elemental Control Weather"
              },
              {
                  name: "Elemental Control Water"
              },
              {
                name: "Intangibility"
              },
              {
                name: "Invisibility"
              },
              {
                name: "Mimic"
              },
              {
                name: "Speed"
              },
              {
                name: "Flight"
              },
              {
                name: "Leaping"
              },
              {
                name: "Swingline"
              },
              {
                name: "Airwalking"
              },
              {
                name: "Burrowing"
              },
              {
                name: "Swimming"
              },
              {
                name: "Mind Control"
              },
              {
                name: "Telepathy"
              },
              {
                name: "Animal Control"
              },
              {
                name: "Plant Control"
              },
              {
                name: "Mystic Resistance"
              },
              {
                name: "Psychic Resistance"
              },
              {
                name: "Reflexes"
              },
              {
                name: "Senses"
              },
              {
                name: "Shapeshifting"
              },
              {
                name: "Size-Changing Growth"
              },
              {
                name: "Size-Changing Shrinking"
              },
              {
                name: "Sorcery"
              },
              {
                name: "Stamina"
              },
              {
                name: "Strength"
              },
              {
                name: "Stretching"
              },
              {
                name: "Teleport"
              },
              {
                name: "Transmutation"
              }

          ]
        }

        this.getTrait = this.getTrait.bind(this);
    }

    getTrait(index, traitIndex) {
        let trait = [];
        let {availableTraits} = this.state;
        let currentPowerset = this.state.powerSetsData[index] || {};

        console.log(currentPowerset);
        for(let availableTrait of availableTraits) {
            let isSelectedTrait = false;
            let availableTraitIndex = 0;
            let selectedTrait;

            if(currentPowerset.traits) {
              for(let existingTrait of currentPowerset.traits) {
                if(existingTrait.name === availableTrait.name && availableTraitIndex === traitIndex) {
                  isSelectedTrait = true;
                  selectedTrait = availableTrait;
                  break;
                }
                availableTraitIndex = availableTraitIndex + 1;
              }
            }
            console.log(currentPowerset, isSelectedTrait, selectedTrait, availableTrait);
            let renderDice = availableTrait.dice;
            trait.push(
                <option data-dice={renderDice} key={availableTrait.name} selected={isSelectedTrait}>{availableTrait.name}</option>
            )
        }        

        return <div className="col-4">
            <select id={index + '_' + traitIndex} className='form-control' onChange={(event)=>{
                                    let updatedPowerset = this.state.powerSetsData[index];

                                    if(!updatedPowerset || !updatedPowerset.traits) {
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
          <AccordionItem key={index}>
           <AccordionItemHeading className="accordionHeader"> 
                <AccordionItemButton>
                <div className="row">
                  <div className="col-10">
                    <p>Power Set {index + 1}</p>
                  </div>
                  <div className="col-2  text-right">
                  <button className="btn btn-primary" onClick={()=>{
                    let updatedPowerset = this.state.powerSets[index];                                   
                    if(!updatedPowerset) {
                      updatedPowerset = {
                        traits: []
                      }
                    }
                    let existingTraits = updatedPowerset.traits.length;
                    updatedPowerset.traits.push(this.getTrait(index, existingTraits));
                                    
                    let updatedPowersets = this.state.powerSets;
                      updatedPowersets[index] = updatedPowerset;
                      this.setState({
                        powerSets: updatedPowersets
                      });
                      this.props.onTraitAdded(index, updatedPowerset);
                    }}>+</button>
                 </div>
                 </div>
                 </AccordionItemButton>
           </AccordionItemHeading>
           <AccordionItemPanel className="pl-5 border border-1 border-primary accordionPanel">
                <div className="row">
                    <p>Bitte Traits hinzufügen</p>
                </div>
                <div className="row">
                    {powerSet && powerSet.traits}
                </div>
            </AccordionItemPanel>
            </AccordionItem>
        );
       
    }

  
    componentWillMount() {
      console.log(this.props);
      if(this.props.powerSets.length > 0) {
        this.setState({
          countPowerSets: this.props.powerSets.length, 
          powerSets: this.props.powerSets,
          powerSetsData: this.props.powerSetsData
        });
      }
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
                    <div className="col-2 text-right">
                        <button className="btn btn-info" onClick={()=>{
                                this.setState({
                                    countPowerSets: this.state.countPowerSets + 1
                                });
                        }}>+</button>
                    </div>
                </div>
                <Accordion>
                {powerSets}
                </Accordion>
            </div>
        )
    }
}
export default PowerSets;
