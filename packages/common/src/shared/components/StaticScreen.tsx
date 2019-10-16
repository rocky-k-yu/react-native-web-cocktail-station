import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import {
  ThemeHeadline1,
  ThemeHeadline2,
  ThemeTextLink,
  ThemeParagraph
} from "@cocktail-helpers/base-components-mui-rne/src/components";

type StaticProps = {
  title: string;
  subtitle?: string;
  link?: string;
};

/**
 * Static screen for prototyping.
 * @param title Screen's title
 * @param link Optional link to next page of happy journey or expected auto redirect
 * @param children Optional dependency injection for component reuse
 */
export const StaticScreen: FunctionComponent<StaticProps> = ({
  title,
  subtitle,
  link,
  children
}) => {
  return (
    <View style={styles.dummy}>
      <ThemeHeadline1>{title}</ThemeHeadline1>
      {subtitle && <ThemeHeadline2>{subtitle}</ThemeHeadline2>}
      {children}
      {link && (
        <ThemeTextLink
          toPath={link}
          textStyle={{ color: "red" }}
        >{`Click to go ${link}`}</ThemeTextLink>
      )}
      <ThemeParagraph>Text in theme paragraph</ThemeParagraph>
    </View>
  );
};

const styles = StyleSheet.create({
  dummy: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default StaticScreen;
