import { createStore, combineReducers } from 'redux';

import modalReducer from '@/store/modal/modalReducer';

const reducers = combineReducers({
  modal: modalReducer
});

const store = createStore(reducers);

export default store;