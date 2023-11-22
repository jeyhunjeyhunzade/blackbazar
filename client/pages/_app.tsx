import "bootstrap/dist/css/bootstrap.css";
import { AppContext } from "next/app";

import buildClient from "api/buildClient";
import Header from "components/Header";
import { CurrentUser, CurrentUserResponse } from "types/types";

interface AppComponentProps {
  Component: React.ElementType<any>;
  pageProps: any;
  currentUser: CurrentUser | null;
}

const AppComponent = ({
  Component,
  pageProps,
  currentUser,
}: AppComponentProps) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <div className="container">
        <Component currentUser={currentUser} {...pageProps} />
      </div>
    </div>
  );
};

AppComponent.getInitialProps = async (appContext: AppContext) => {
  const client = buildClient(appContext.ctx);
  const { data }: CurrentUserResponse = await client.get(
    "/api/users/currentuser"
  );
  let pageProps = {};

  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      // @ts-ignore
      client,
      data.currentUser
    );
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;
