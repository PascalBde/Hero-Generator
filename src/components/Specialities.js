import React from 'react';
import {Component} from 'react';

class Specialities extends Component {
    constructor(props) {
        super(props);

        this.state = {
          countSpecialities: 0,
          specialities: [],
          specialitiesData: [],
          availableSpecialities: [
              {
                  name: "Acrobatic",
                },
              {
                  name: "Business",
                },
              {
                  name: "Combat",
                },
              {
                  name: "Cosmic",
                },
              {
                  name: "Covert",
                },
              {
                  name: "Crime",
                },
              {
                  name: "Medical",
                },
              {
                  name: "Menace",
                },
              {
                  name: "Mystic",
                },
              {
                  name: "Psych",
                },
              {
                  name: "Science",
                },
              {
                  name: "Tech",
                },
              {
                  name: "Vehicle",
                },
          ],
          specialityRank: [
              {
                  name: "Master",
                  dice: 10, 
                },
              {
                  name: "Expert",
                  dice: 8,
                },
              {
                  name: "Rookie",
                  dice: 6,
                }
          ]
        }

        this.getSpeciality = this.getSpeciality.bind(this);
    }


getSpeciality(index, specialityIndex) {
    let speciality = [];
    let {availableSpecialities} = this.state;

    for(let availableSpeciality of availableSpecialities) {
        speciality.push(
            <option key={availableSpecialities.name}>{availableSpeciality.name}</option>
            )
    }
    return <div className="col-4">
    <select className='form-control' onChange={(event)=>{
                            let updatedSpeciality = this.state.specialitiesData[index];

                            if(!updatedSpeciality) {
                                updatedSpeciality = {
                                    specialities: []
                                }
                            }
                            
                            const rankDice = [];
                            updatedSpeciality.specialities[specialityIndex] = {name: event.target.value, dice: rankDice}
                            
                            event.target.selectedOptions[0].innerText += " (W" + rankDice + ")";
                            let updatedSpecialities = this.state.specialitiesData;
                            updatedSpecialities[index] = updatedSpeciality;
                            this.setState({
                                specialitiesData: updatedSpecialities
                            });
                            this.props.onUpdate(index, updatedSpeciality);
}}>
<option value="-1" disabled selected>Bitte auswählen</option> 
{speciality}
</select></div>;
}








render() {
    let specialities = [];

    for(let i=0; i<this.state.countSpecialities; i++) {
        specialities.push(this.getSpeciality(i));
    }

    return(
        <div>
            <div className="row">
                <div className="col-10">
                    <h5>Specialities</h5>
                </div>
                <div className="col-2">
                    <button className="btn btn-info" onClick={()=>{
                            this.setState({
                                countSpecialities: this.state.countSpecialities + 1
                            });
                    }}>+</button>
                </div>
            </div>
            
            {specialities}
        
        </div>
    )
}
export default Specialities;
