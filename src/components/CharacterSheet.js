import React from 'react';
import {Component} from 'react';
import PrintIcon from 'react-feather/dist/icons/printer';
// import {save} from "save-file";

class CharacterSheet extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };

    }


    render() {
        let characterSheet = this.props.data;
        delete characterSheet.milestones;

        console.log(characterSheet);
        return (<div>
            <div className="row">
                <div className="col-12">
                    <h2>Charakterblatt</h2>
                    <button className={'btn btn-info'} onClick={()=>{
                        window.print();
                    }
                    }><PrintIcon/></button>                </div>
            </div>
            <div className="row pb-3">
                <div className="col-12 col-sm-4">
                    <div className="card">
                        <div className="card-header">
                            Allgemein
                        </div>
                        <div className="card-body">
                            {characterSheet.stammdaten.name &&
                            <div className="row">
                                <div className="col-6 font-weight-bold">
                                    Name
                                </div>
                                <div className="col-6">
                                    {characterSheet.stammdaten.name}
                                </div>
                            </div>
                            }
                            {characterSheet.stammdaten.age &&
                            <div className="row">
                                <div className="col-6 font-weight-bold">
                                    Alter
                                </div>
                                <div className="col-6">
                                    {characterSheet.stammdaten.age}
                                </div>
                            </div>
                            }
                            {characterSheet.stammdaten.gender &&
                            <div className="row">
                                <div className="col-6 font-weight-bold">
                                    Geschlecht
                                </div>
                                <div className="col-6">
                                    {characterSheet.stammdaten.gender}
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="card">
                        <div className="card-header">
                            Affiliations
                        </div>
                        <div className="card-body">
                            {characterSheet.affiliations.buddy &&
                            <div className="row">
                                <div className="col-6 font-weight-bold">
                                    Buddy
                                </div>
                                <div className="col-6">
                                    W{characterSheet.affiliations.buddy}
                                </div>
                            </div>
                            }
                            {characterSheet.affiliations.solo &&
                            <div className="row">
                                <div className="col-6 font-weight-bold">
                                    Solo
                                </div>
                                <div className="col-6">
                                    W{characterSheet.affiliations.solo}
                                </div>
                            </div>
                            }
                            {characterSheet.affiliations.team &&
                            <div className="row">
                                <div className="col-6 font-weight-bold">
                                    Team
                                </div>
                                <div className="col-6">
                                    W{characterSheet.affiliations.team}
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="card">
                        <div className="card-header">
                            Distinctions
                        </div>
                        <div className="card-body">
                            {characterSheet.distinctions.distinction1 &&
                            <div className="row">
                                <div className="col-12">
                                    {characterSheet.distinctions.distinction1}
                                </div>
                            </div>
                            }
                            {characterSheet.distinctions.distinction2 &&
                            <div className="row">
                                <div className="col-12">
                                    {characterSheet.distinctions.distinction2}
                                </div>
                            </div>
                            }
                            {characterSheet.distinctions.distinction3 &&
                            <div className="row">
                                <div className="col-12">
                                    {characterSheet.distinctions.distinction3}
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-4">
                    <div className="card">
                        <div className="card-header">
                            Power Sets
                        </div>
                        <div className="card-body">
                            {characterSheet.powerSets.length &&
                            characterSheet.powerSets.map((powerset) => {
                                if(powerset.traits && powerset.traits.length) {
                                    return powerset.traits.map((trait)=>{
                                        return <div>{trait.name + " W" + trait.dice}</div>;
                                    })
                                }
                            })
                            }
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="card">
                        <div className="card-header">
                            Specialities
                        </div>
                        <div className="card-body">
                            {characterSheet.specialities.length &&
                                characterSheet.specialities.map((speciality) => {
                                    return <div>{speciality.name + " W" + speciality.dice}</div>;
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="card">
                        <div className="card-header">
                            Biographie
                        </div>
                        <div className="card-body">
                            {characterSheet.biorp.biography &&
                            <div className="row">
                                <div className="col-12">
                                    {characterSheet.biorp.biography}
                                </div>
                            </div>
                            }
                            {characterSheet.biorp.roleplay &&
                            <div className="row">
                                <div className="col-12">
                                    {characterSheet.biorp.roleplay}
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }

}

export default CharacterSheet;