open Routes;

type state = {route};
type action =
  | ChangeRoute(route);

let reducer = (action, _state) =>
  switch (action) {
  | ChangeRoute(route) => ReasonReact.Update({route: route})
  };

let mapUrlToAction = (url: ReasonReact.Router.url) =>
  ChangeRoute(url |> Routes.mapUrlToRoute);

let component = ReasonReact.reducerComponent("App");

let make = _children => {
  ...component,
  reducer,
  initialState: () => {route: Home},
  didMount: self => {
    ReasonReact.Router.dangerouslyGetInitialUrl()
    |> mapUrlToAction
    |> self.send;
    let watcherID =
      ReasonReact.Router.watchUrl(url => url |> mapUrlToAction |> self.send);
    self.onUnmount(() => ReasonReact.Router.unwatchUrl(watcherID));
  },
  render: self => <TopLevel route={self.state.route} />,
};