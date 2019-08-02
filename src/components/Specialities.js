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


  getSpeciality(index) {
      let speciality = [];
      let {availableSpecialities} = this.state;

      for(let availableSpeciality of availableSpecialities) {
          speciality.push(
              <option key={availableSpecialities.name}>{availableSpeciality.name}</option>
              )
      }
      return <div className="col-4">
      <select className='form-control' onChange={(event)=>{
                              let specialitiesData = this.state.specialitiesData;

                              // if no specialities have been set, initialise with an empty list
                              if(!specialitiesData) {
                                  specialitiesData = [];
                              }
                              // list of legal dice
                              const rankDice = [6, 8, 10];

                              let userDice = prompt("Würfeltyp angeben");
                              if(!rankDice.includes(parseInt(userDice))) {
                                userDice = prompt("Bitte gültigen Würfel eingeben (W6, 8, 10)")
                              }
                              
                              const currentSpeciality = {name: event.target.value, dice: userDice};
                              specialitiesData.push(currentSpeciality);
                              
                              // update input field label
                              event.target.selectedOptions[0].innerText += " (W" + userDice + ")";
                              
                              this.setState({
                                  specialitiesData: specialitiesData
                              });
                              this.props.onUpdate(index, currentSpeciality);
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
                  <div className="col-2 text-right">
                      <button className="btn btn-info" onClick={()=>{
                              this.setState({
                                  countSpecialities: this.state.countSpecialities + 1
                              });
                      }}>+</button>
                  </div>
              </div>
              <div className="row">
                {specialities}
              </div>
          </div>
      )
  }
}
export default Specialities;