
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import dashboardReducer from "./dashboard/dashboard.reducer";


const rootReducer = combineReducers({
  auth :authReducer,
  dashboard:dashboardReducer
});
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk) );

