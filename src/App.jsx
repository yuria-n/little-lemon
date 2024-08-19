import { Route, Switch } from "wouter";

import { Header, Footer, NotFound, Home } from "./components";
import { links, routePath } from "./constants";

import "./App.css";

const contents = {
  [routePath.home]: Home,
  [routePath.about]: () => <div>About</div>,
  [routePath.menu]: () => <div>Menu</div>,
  [routePath.reservation]: () => <div>Reservations</div>,
  [routePath.order]: () => <div>Online order</div>,
};

export function App() {
  return (
    <>
      <Header />

      <main>
        <Switch>
          {links.map(([text, path]) => (
            <Route key={text} path={path} component={contents[path]} />
          ))}
          <Route component={NotFound} />
        </Switch>
      </main>

      <Footer />
    </>
  );
}
