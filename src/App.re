open NavigationConfig;
open BsReactNative;
let styles =
  Style.(
    StyleSheet.create({
      "container":
        style([flex(1.), justifyContent(Center), alignItems(Center)]),
    })
  );

let component = ReasonReact.statelessComponent("App");

let make = _children => {
  ...component,
  render: _self =>
    <StackNavigator
      initialState=[|Config.Home|]
      onStateChange=(
        state =>
          AsyncStorage.setItem(
            "$state",
            state |> StackNavigator.Persistence.encode |> Js.Json.stringify,
            (),
          )
          |> ignore
      )>
      ...(
           (~currentRoute, ~navigation) =>
             switch (currentRoute) {
             | Config.Home => <Home navigation />
             | Config.Detail => <Detail navigation />
             /* | Config.Admin => <Admin navigation /> */
             /* | Config.Welcome => <Welcome navigation /> */
             }
         )
    </StackNavigator>,
};

let default = ReasonReact.wrapReasonForJs(~component, _ => make([||]));