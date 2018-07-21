'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Text$BsReactNative = require("bs-react-native/src/components/text.js");
var View$BsReactNative = require("bs-react-native/src/components/view.js");
var Style$BsReactNative = require("bs-react-native/src/style.js");
var Button$BsReactNative = require("bs-react-native/src/components/button.js");
var StyleSheet$BsReactNative = require("bs-react-native/src/styleSheet.js");
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

var component = ReasonReact.statelessComponent("Home");

function make(navigation, _) {
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
              return ReasonReact.element(undefined, undefined, Curry.app(NavigationConfig$Hackernews.StackNavigator[/* Screen */3][/* make */0], [
                              navigation,
                              undefined,
                              "Home",
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              (function () {
                                  return ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(styles.container), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[
                                                  ReasonReact.element(undefined, undefined, Text$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Home Screen", /* array */[])),
                                                  ReasonReact.element(undefined, undefined, Button$BsReactNative.make(undefined, undefined, undefined, (function () {
                                                                return Curry._1(navigation[/* push */0], /* Detail */1);
                                                              }), undefined, "Go to detail")(/* array */[]))
                                                ]));
                                })
                            ]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

exports.styles = styles;
exports.component = component;
exports.make = make;
/* styles Not a pure module */
