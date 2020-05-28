import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth4803Reducer from '../features/EmailAuth4803/redux/reducers';
import EmailAuth4802Reducer from '../features/EmailAuth4802/redux/reducers';
import EmailAuth4801Reducer from '../features/EmailAuth4801/redux/reducers';
import EmailAuth4800Reducer from '../features/EmailAuth4800/redux/reducers';
import EmailAuth4799Reducer from '../features/EmailAuth4799/redux/reducers';
import EmailAuth4798Reducer from '../features/EmailAuth4798/redux/reducers';
import EmailAuth4789Reducer from '../features/EmailAuth4789/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth4803: EmailAuth4803Reducer,
EmailAuth4802: EmailAuth4802Reducer,
EmailAuth4801: EmailAuth4801Reducer,
EmailAuth4800: EmailAuth4800Reducer,
EmailAuth4799: EmailAuth4799Reducer,
EmailAuth4798: EmailAuth4798Reducer,
EmailAuth4789: EmailAuth4789Reducer,
EmailAuth: EmailAuthReducer,

});