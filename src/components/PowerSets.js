import React from 'react';
import {Component} from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from 'react-accessible-accordion';

class PowerSets extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countPowerSets: this.props.powerSetsData.length || 1,
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

    getTrait(powerSetIndex, traitIndex) {
        let trait = [];
        let {availableTraits} = this.state;
        let currentPowerset = this.state.powerSetsData[powerSetIndex] || {};

        console.log(currentPowerset);
        for (let availableTrait of availableTraits) {
            let isSelectedTrait = false;
            let availableTraitIndex = 0;
            let selectedTrait;

            if (currentPowerset.traits) {
                for (let existingTrait of currentPowerset.traits) {
                    if (existingTrait.name === availableTrait.name && availableTraitIndex === traitIndex) {
                        isSelectedTrait = true;
                        selectedTrait = availableTrait;
                        break;
                    }
                    availableTraitIndex = availableTraitIndex + 1;
                }
            }
            let renderDice = availableTrait.dice;
            trait.push(
                <option data-dice={renderDice} key={availableTrait.name}
                        selected={isSelectedTrait}>{availableTrait.name}</option>
            )
        }

        return <div className="col-4">
            <select id={powerSetIndex + '_' + traitIndex} className='form-control' onChange={(event) => {
                let updatedPowerset = this.state.powerSetsData[powerSetIndex];

                if (!updatedPowerset || !updatedPowerset.traits) {
                    updatedPowerset = {
                        traits: []
                    }
                }
                const validDice = [4, 6, 8, 10, 12];
                let userDice = prompt("Würfeltyp angeben");

                if (!validDice.includes(parseInt(userDice))) {
                    userDice = prompt("Bitte gültigen Würfel eingeben (W4, 6, 8, 10, 12)")
                }
                updatedPowerset.traits[traitIndex] = {name: event.target.value, dice: userDice}

                event.target.selectedOptions[0].innerText += " (W" + userDice + ")";

                let updatedPowersets = this.state.powerSetsData;
                updatedPowersets[powerSetIndex] = updatedPowerset;
                this.setState({
                    powerSetsData: updatedPowersets
                });
                this.props.onUpdate(powerSetIndex, updatedPowerset);
            }}>
                <option value="-1" disabled selected>Bitte auswählen</option>
                {trait}
            </select></div>;
    }

    getPowerSet(powerSetIndex) {
        let powerSet;
        let traitIndex = 0;

        if (this.state.powerSetsData[powerSetIndex]) {
            powerSet = this.state.powerSetsData[powerSetIndex];
        }

        console.log('getPowerSet called', powerSetIndex, this.state.powerSetsData, powerSet);
        return (
            <AccordionItem key={powerSetIndex}>
                <AccordionItemHeading className="accordionHeader">
                    <AccordionItemButton>
                        <div className="row">
                            <div className="col-10">
                                <p>Power Set {powerSetIndex + 1}</p>
                            </div>
                            <div className="col-2  text-right">
                                <button className="btn btn-primary" onClick={() => {
                                    let updatedPowerset = this.state.powerSetsData[powerSetIndex];
                                    if (!updatedPowerset) {
                                        updatedPowerset = {};
                                    }
                                    if (!updatedPowerset.traits) {
                                        updatedPowerset.traits = [];
                                    }
                                    updatedPowerset.traits.push(powerSetIndex);

                                    let updatedPowersets = this.state.powerSetsData;
                                    updatedPowersets[powerSetIndex] = updatedPowerset;
                                    this.setState({
                                        powerSets: updatedPowersets
                                    });
                                    this.props.onUpdate(powerSetIndex, updatedPowerset);
                                }}>+
                                </button>
                            </div>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="pl-5 border border-1 border-primary accordionPanel">
                    <div className="row">
                        <p>Traits hinzufügen</p>
                    </div>
                    <div className="row">
                        {(powerSet && powerSet.traits) && powerSet.traits.map((trait) => {
                            let renderedTrait = this.getTrait(powerSetIndex, traitIndex);
                            traitIndex = traitIndex + 1;
                            return renderedTrait;
                        })}
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        );

    }


    componentWillMount() {
        console.log(this.props);
        if (this.props.powerSetsData.length > 0) {
            this.setState({
                countPowerSets: this.props.powerSetsData.length,
                powerSetsData: this.props.powerSetsData
            });
        }
    }

    render() {
        let powerSets = [];

        for (let i = 0; i < this.state.countPowerSets; i++) {
            powerSets.push(this.getPowerSet(i));
        }

        console.log(this.state);
        return (
            <div>
                <div className="row">
                    <div className="col-10">
                        <h5>Power Sets</h5>
                    </div>
                    <div className="col-2 text-right">
                        <button className="btn btn-info" onClick={() => {
                            this.setState({
                                countPowerSets: this.state.countPowerSets + 1
                            });
                        }}>+
                        </button>
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
