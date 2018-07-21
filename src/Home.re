open NavigationConfig;
open BsReactNative;
let styles =
  Style.(
    StyleSheet.create({
      "container":
        style([flex(1.), justifyContent(Center), alignItems(Center)]),
    })
  );

let component = ReasonReact.statelessComponent("Home");

let make = (~navigation, _children) => {
  ...component,
  render: _self =>
    <StackNavigator.Screen headerTitle="Home" navigation>
      ...(
           () =>
             <View style=styles##container>
               <Text value="Home Screen" />
               <Button
                 onPress=(_ => navigation.push(Config.Detail))
                 title="Go to detail"
               />
             </View>
         )
    </StackNavigator.Screen>,
};