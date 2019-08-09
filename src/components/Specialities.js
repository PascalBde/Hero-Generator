import React from 'react';
import {Component} from 'react';

class Specialities extends Component {
      constructor(props) {
          super(props);

          this.state = {
            countSpecialities: this.props.specialities.length || 0,
            specialities: this.props.specialities || [],
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

  checkDice(legalDice = [6, 8, 10]) {
    // list of legal dice

    let result = prompt("Bitte gültigen Würfel eingeben (W6, 8, 10)");
    if(!legalDice.includes(parseInt(result))) {
      result = this.checkDice();
    }
    if(result) {
      return result;
    } else {
      this.checkDice();
    }
  }    

  getSpeciality(index) {
      let speciality = [];
      let {availableSpecialities} = this.state;

      let existingSpecialities = this.state.specialities;
      console.log(existingSpecialities);
      for(let availableSpeciality of availableSpecialities) {
          let isSelectedSpeciality = false;
          let specialityIndex = 0;

          for(let existingSpeciality of existingSpecialities) {
              if(existingSpeciality.name === availableSpeciality.name && specialityIndex === index) {
                isSelectedSpeciality = true;
                break;
              }
              specialityIndex = specialityIndex + 1;
          }
          speciality.push(
              <option key={availableSpecialities.name} selected={isSelectedSpeciality}>{availableSpeciality.name}</option>
              );       
      }

      return <div className="col-4">
      <select className='form-control' onChange={(event)=>{
                              let specialitiesData = this.state.specialitiesData;

                              // if no specialities have been set, initialise with an empty list
                              if(!specialitiesData) {
                                  specialitiesData = [];
                              }
                              let userDice = this.checkDice();
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

  componentWillReceiveProps(nextProps, nextState) {
    console.log(nextProps, nextState);
  }
  componentWillMount() {
    console.log(this.props);
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