import { combineReducers } from 'redux';
import products from'./productReducer';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
    products, 
    form: formReducer
});

export default rootReducer;