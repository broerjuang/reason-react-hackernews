'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Home$Hackernews = require("./Home.bs.js");
var Detail$Hackernews = require("./Detail.bs.js");
var Style$BsReactNative = require("bs-react-native/src/style.js");
var StyleSheet$BsReactNative = require("bs-react-native/src/styleSheet.js");
var AsyncStorage$BsReactNative = require("bs-react-native/src/asyncStorage.js");
var NavigationConfig$Hackernews = require("./NavigationConfig.bs.js");

var styles = StyleSheet$BsReactNative.create({
      container: Style$BsReactNative.style(/* :: */[
            Style$BsReactNative.flex(1),
            /* :: */[
              Style$BsReactNative.justifyContent(/* Center */2),
              /* :: */[
                Style$BsReactNative.alignItems(/* Center */2),
                /* [] */0
              ]
            ]
          ])
    });

var component = ReasonReact.statelessComponent("App");

function make() {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              return ReasonReact.element(undefined, undefined, Curry._5(NavigationConfig$Hackernews.StackNavigator[/* make */1], /* array */[/* Home */0], (function (state) {
                                AsyncStorage$BsReactNative.setItem("$state", JSON.stringify(Curry._1(NavigationConfig$Hackernews.StackNavigator[/* Persistence */0][/* encode */0], state)), undefined, /* () */0);
                                return /* () */0;
                              }), undefined, undefined, (function (currentRoute, navigation) {
                                if (currentRoute) {
                                  return ReasonReact.element(undefined, undefined, Detail$Hackernews.make(navigation, /* array */[]));
                                } else {
                                  return ReasonReact.element(undefined, undefined, Home$Hackernews.make(navigation, /* array */[]));
                                }
                              })));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var $$default = ReasonReact.wrapReasonForJs(component, (function () {
        return make(/* array */[]);
      }));

exports.styles = styles;
exports.component = component;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* styles Not a pure module */
