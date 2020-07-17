import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import RecoverPassword from "./pages/RecoverPassword";
import Panel from "./pages/Panel";

const AppStack = createStackNavigator();

const routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Panel" component={Panel} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="CreateAccount" component={CreateAccount} />
        <AppStack.Screen name="RecoverPassword" component={RecoverPassword} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default routes;
