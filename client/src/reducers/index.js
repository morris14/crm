import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import company from "./company";
import contact from "./contact";
import job from "./job";
import settings from "./settings";

export default combineReducers({
    auth,
    alert,
    company,
    contact,
    job,
    settings,
});
