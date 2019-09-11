import React, { Component } from 'react';
const Context = React.createContext();

//methods
const reducer = (state, action)=>{
  switch(action.type){
      //delete
    case 'DELETE_PET':
      return{
        ...state,
        pets: state.pets.filter(pet => pet.id !== action.payload)
      };
      //add pet
    case 'ADD_PET':
      return{
        ...state,
        pets: [action.payload, ...state.pets]
      };
      //add more diet - need to find how to add to nested array
    case 'ADD_DIET':
      return{
        ...state,
        pets: [action.payload, ...state.pets.diets]
      }

  }
}

export class Provider extends Component {
    state={
        pets:[
            {
              id:1,
              name:"Samuel",
              animal:"Dog",
              updated:"3 weeks ago",
              thumbnail: "https://res.cloudinary.com/ddzbntqlz/image/upload/v1565069868/gr-puppy_akfwsd.jpg",
              general:[
               {
                breed:"Golden Retriever",
                sex:"Male Entire",
                dob:"28/03/2019",
                age:"14 weeks old",
                }
              ],
              diets:[
                {
                  diettype:"Main",
                  dietname:"Proplan Puppy Dry",
                  mealtimes:3,
                  volume:2,
                  volumemeasure:"cup/s",
                  dietother:" "
                },
                {
                  diettype:"Snack",
                  dietname:"Roo Sticks",
                  mealtimes:"",
                  volume:5,
                  volumemeasure:"stick/s",
                  dietother:"Maximum 5 sticks a day. "
                }
              ],
              medication:[
                {
                  medtype:"Parasite Control",
                  medname:"Revolution for Dogs",
                  medfreq: "Once a month",
                  medroute:"Oral",
                  mednotes:"Give with piece of ham"
                }
              ],
              notes:[
                {
                  note: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Morbi quis libero et eros rhoncus feugiat. "
                }
              ],
              gallery:[
                {
                  photo: "https://res.cloudinary.com/ddzbntqlz/image/upload/v1565069881/gr-puppy2_oizhy5.jpg"
                },
                {
                  photo: "https://res.cloudinary.com/ddzbntqlz/image/upload/v1565069884/gr-puppy3_k4eqya.jpg"
                },
                {
                  photo: "https://res.cloudinary.com/ddzbntqlz/image/upload/v1565070149/gr-puppy4_bky9xa.jpg"
                }
              ],
          },
            //{
            //  
            //  id:2,
            //  name:"Linda",
            //  animal: "Cat",
            //  updated:"3 weeks ago",
            //  thumbnail: "https://res.cloudinary.com/ddzbntqlz/image/upload/v1565225563/////default-cat-placeholder_puwnuw.png"
            //}
          ],
          //call methods
          dispatch: action =>{
            this.setState(state => reducer(state, action));
          }
    };
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer=Context.Consumer;


