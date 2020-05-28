import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth4802Saga from '../features/EmailAuth4802/redux/sagas';
import EmailAuth4801Saga from '../features/EmailAuth4801/redux/sagas';
import EmailAuth4800Saga from '../features/EmailAuth4800/redux/sagas';
import EmailAuth4799Saga from '../features/EmailAuth4799/redux/sagas';
import EmailAuth4798Saga from '../features/EmailAuth4798/redux/sagas';
import EmailAuth4789Saga from '../features/EmailAuth4789/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth4802Saga,
EmailAuth4801Saga,
EmailAuth4800Saga,
EmailAuth4799Saga,
EmailAuth4798Saga,
EmailAuth4789Saga,
EmailAuthSaga,
    
  ]);
}