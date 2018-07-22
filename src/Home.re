open NavigationConfig;
open BsReactNative;
let styles =
  Style.(
    StyleSheet.create({
      "container": style([flex(1.), backgroundColor(String("#fff"))]),
    })
  );

module NewsList = {
  let styles =
    Style.(
      StyleSheet.create({
        "newsListContainer":
          style([
            padding(Pt(10.)),
            borderBottomWidth(0.5),
            borderColor(String("#eee")),
            flexDirection(Row),
            flex(1.),
            maxHeight(Pt(100.)),
            alignItems(Center),
          ]),
        "commentCounter":
          style([
            height(Pt(50.)),
            width(Pt(50.)),
            borderColor(String("#eee")),
            borderWidth(1.),
            padding(Pt(5.)),
            justifyContent(Center),
            alignItems(Center),
            borderRadius(50.),
          ]),
        "leftContainer": style([flex(1.)]),
        "titleText": style([fontSize(Float(20.)), marginBottom(Pt(5.))]),
        "postDetail":
          style([flexDirection(Row), flex(1.), alignItems(Center)]),
        "vote":
          style([
            padding(Pt(5.)),
            backgroundColor(String("orange")),
            borderRadius(20.),
            marginRight(Pt(10.)),
          ]),
        "textWhite": style([color(String("#fff"))]),
      })
    );
  let component = ReasonReact.statelessComponent("NewsList");
  let make = (~navigation: StackNavigator.navigation, _children) => {
    ...component,
    render: _self =>
      <TouchableOpacity
        onPress=(_ => navigation.push(Config.Detail))
        style=styles##newsListContainer>
        <View style=styles##leftContainer>
          <Text style=styles##titleText value="Apple Watch Review" />
          <Text value="techcrunch.com" />
          <View style=styles##postDetail>
            <View style=styles##vote>
              <Text style=styles##textWhite value="1,250" />
            </View>
            <Text value="by" />
            <Text value="John Doe" />
          </View>
        </View>
        <View style=styles##commentCounter> <Text value="16" /> </View>
      </TouchableOpacity>,
  };
};

let component = ReasonReact.statelessComponent("Home");

let make = (~navigation, _children) => {
  ...component,
  render: _self =>
    <StackNavigator.Screen headerTitle="Hacker News" navigation>
      ...(
           () =>
             <View style=styles##container>
               <NewsList navigation />
               <NewsList navigation />
               <NewsList navigation />
             </View>
         )
    </StackNavigator.Screen>,
};