import { Route, Switch } from "wouter";

import { Header, Footer, NotFound, Home, About, Menu } from "./components";
import { links, routePath } from "./constants";

import "./App.css";
import { Section } from "./components/Section";

const contents = {
  [routePath.home]: Home,
  [routePath.about]: About,
  [routePath.menu]: Menu,
  [routePath.reservation]: () => <Section title="Reservations" />,
  [routePath.order]: () => <Section title="Online order" />,
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
