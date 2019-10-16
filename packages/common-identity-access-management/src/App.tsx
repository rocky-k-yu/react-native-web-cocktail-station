import React from "react";
import { Route, Switch } from "@emma-services/common/src/shared";

import LoginInputEmailAndPassword from "./mod-login/routes/InputEmailAndPassword";
import LoginInputOneTimePin from "./mod-login/routes/InputOneTimePin";
import LoginShowHints from "./mod-login/routes/ShowHints";

export function AppRouter(props: any) {
  const {
    match: { url }
  } = props;
  return (
    <Switch>
      <Route
        exact
        path={`/login/input-email-and-password`}
        component={LoginInputEmailAndPassword}
      />
      <Route
        exact
        path={`/login/input-one-time-pin`}
        component={LoginInputOneTimePin}
      />
      <Route exact path={`/login/show-hints`} component={LoginShowHints} />
      <Route exact path={`/login/`} component={LoginInputEmailAndPassword} />
    </Switch>
  );
}

export default AppRouter;
