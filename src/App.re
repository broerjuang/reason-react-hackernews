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
    <View style=styles##container> <Text value="HackerNews" /> </View>,
};

let default = ReasonReact.wrapReasonForJs(~component, _ => make([||]));