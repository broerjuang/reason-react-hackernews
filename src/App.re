open NavigationConfig;
open BsReactNative;
let styles =
  Style.(
    StyleSheet.create({
      "container":
        style([flex(1.), justifyContent(Center), alignItems(Center)]),
    })
  );

type state = {
  page: int,
  stories: array(StoryData.story),
};
type action =
  | FetchTopStories
  | FetchTopStoriesLoaded(int, array(StoryData.story));

let component = ReasonReact.reducerComponent("App");

let make = _children => {
  ...component,
  initialState: () => {page: 0, stories: [||]},
  didMount: self => self.send(FetchTopStories),
  reducer: (action, state) =>
    switch (action) {
    | FetchTopStories =>
      ReasonReact.SideEffects(
        (
          self =>
            StoryData.fetchTopStories(state.page + 1, payload =>
              self.send(FetchTopStoriesLoaded(fst(payload), snd(payload)))
            )
            |> ignore
        ),
      )
    | FetchTopStoriesLoaded(page, stories) =>
      ReasonReact.Update({page, stories})
    },
  render: self =>
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
             | Config.Home => <Home navigation stories=self.state.stories />
             | Config.Detail => <Detail navigation />
             }
         )
    </StackNavigator>,
};

let default = ReasonReact.wrapReasonForJs(~component, _ => make([||]));