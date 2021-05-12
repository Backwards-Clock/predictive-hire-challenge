import React from "react";
import { Route, RouteProps } from "react-router-dom";
import Menu from "./Menu";
import PageHeader from "./PageHeader";

interface PublicRouteProps {
  header: { title: string; subtitle?: string };
}

/**
 * Extends react-router-dom.Route to include header and menu content
 * Provides layout for users who are not logged in
 */
const PublicRoute = ({ header, ...rest }: PublicRouteProps & RouteProps) => {
  return (
    <React.Fragment>
      <Menu path={rest.path} />
      <PageHeader {...header} />
      <Route {...rest} component={rest.component} />
    </React.Fragment>
  );
};

export default PublicRoute;
