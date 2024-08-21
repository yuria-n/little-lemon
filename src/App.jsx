import { Route, Switch } from "wouter";

import {
  Header,
  Footer,
  NotFound,
  Home,
  About,
  Menu,
  Reservations,
  Order,
} from "./components";
import { links, routePath } from "./constants";

import "./App.css";

const contents = {
  [routePath.home]: Home,
  [routePath.about]: About,
  [routePath.menu]: Menu,
  [routePath.reservation]: Reservations,
  [routePath.order]: Order,
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
