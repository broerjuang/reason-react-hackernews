open NavigationConfig;
open BsReactNative;

let component = ReasonReact.statelessComponent("Detail");

let make = (~navigation: StackNavigator.navigation, _children) => {
  ...component,
  render: _self =>
    <StackNavigator.Screen
      headerTitle="Detail"
      navigation
      headerStyle=Style.(style([backgroundColor(String("red"))]))>
      ...(
           () =>
             <View>
               <Text> (ReasonReact.string("Home screen")) </Text>
               <Button onPress=(_ => navigation.pop()) title="go to home" />
             </View>
         )
    </StackNavigator.Screen>,
};