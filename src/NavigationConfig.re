module Config = {
  type route =
    | Home
    | Detail;
};

include RerouteNative.StackNavigator.CreateStackNavigator(Config);