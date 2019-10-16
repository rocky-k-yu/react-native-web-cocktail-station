import React, { useContext } from "react";
import { StaticScreen } from "../shared";
import { Store as AdminStore } from "../context/authen";
import { ThemeTextLink } from "@cocktail-helpers/base-components-mui-rne/src/components";

export default () => {
  const { state } = useContext(AdminStore);
  console.log("home", state);
  return (
    <StaticScreen
      title="HomeScreen in MainApp"
      subtitle="Sub-HomeScreen"
      link="MiniApp"
    >
      <ThemeTextLink toPath="/">Exit</ThemeTextLink>
      {!state.isAuth && (
        <ThemeTextLink toPath="/login/">Login Mini App</ThemeTextLink>
      )}
    </StaticScreen>
  );
};
