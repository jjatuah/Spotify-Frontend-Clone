export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //ENSURE YOU REMOVE WHEN YOU'RE DONE DEVELOPING
  // token: "BQDrBvUD34rnHJzbAtFFr1f8gmiIn5V1CGhso8PweJr9CS05dMH9sEQxrihwUS95l7CEind-u08dYPzNqTsZUwOQXwJ1tTqcRAwO5vIPzHL3Eti5cJp6q8c2pXgh8NyN2uVGuZH0ZoTxWgrS-r0ewUcSJcnrXtkQeA-E7AwNngzDn5XtffNO"
}

const reducer = (state, action) => {
 switch(action.type) {
   case "SET_USER":
     return {
       ...state,
       user: action.user
     };
     case "SET_TOKEN":
       return{
         ...state,
         token: action.token
       };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists
      };
      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        }
    default: 
    return state;
 }
} 

export default reducer;