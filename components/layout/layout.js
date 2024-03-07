import { Fragment } from "react";
import NavigationBar from "./navigation-bar";

function Layout(props) {
  return (
    <Fragment>
      <NavigationBar />
      <main>{props.children}</main>
    </Fragment>
  )
}

export default Layout;
