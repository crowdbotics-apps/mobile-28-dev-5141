import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
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
EmailAuth4798Saga,
EmailAuth4789Saga,
EmailAuthSaga,
    
  ]);
}