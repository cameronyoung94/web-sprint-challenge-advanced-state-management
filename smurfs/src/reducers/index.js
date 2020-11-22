import {UPDATED_SMURFS} from '../actions/index'

let initialState = [
    {
      smurfs: []
    }
  ];

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATED_SMURFS:
      return {
        ...state,
        smurfs: action.payload
      };
      default:
        return state;
    }
  }

export default smurfReducer
