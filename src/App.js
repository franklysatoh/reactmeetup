import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import TodosPage from "./pages/Todos";
import NoPage from "./pages/NoPage";
import MainNavigation from "./components/layouts/MainNavigation";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Layout>
      {/* The content below, props.children in Layout */}
      {/* Switch: define which route should be rendered */}
      <Switch>
        {/* exact: applied if location is matched exactly  */}
        <Route exact path="/">
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
        <Route path="/todos">
          <TodosPage />
        </Route>
        <Route>
          <NoPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
