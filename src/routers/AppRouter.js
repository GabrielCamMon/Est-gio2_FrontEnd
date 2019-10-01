import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";

import SingUp from "../components/SingUp/SingUpData";
import EditProfile from "../components/Profile/EditProfile";

// import AddUserRegisterPersonalData from "../components/SingUp/AddUserRegisterPersonalData";
// import AddUserRegisterDocumentData from "../components/SingUp/AddUserRegisterDocumentData";

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route exact path="/"/>
                <Route path="/users/create"
                    component={SingUp}/> 
                <Route path="/users/editprofile" component={EditProfile}/>            
                    {/* <Route
          path="/createuser/step2"
          component={AddUserRegisterPersonalData}
        />
        <Route
          path="/createuser/step3"
          component={AddUserRegisterDocumentData}
        /> */} 
        </Switch>
        </div>
    </Router>
);

export default AppRouter;
