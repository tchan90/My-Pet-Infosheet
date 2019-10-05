import {GET_PETS, DELETE_PET, ADD_PET} from '../actions/types';
const initialState={
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
          ]
};
export default function(state=initialState, action){
    switch(action.type){
        case GET_PETS:
            return{
                ...state
            }
        case ADD_PET:
          return{
            ...state,
            pets:[action.payload, ...state.pets]
          }
        case DELETE_PET:
          return{
            ...state,
            pets:state.pets.filter(pet=> pet.id!==action.payload)
          }
        default:
            return state;
    }
}

