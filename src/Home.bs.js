'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Text$BsReactNative = require("bs-react-native/src/components/text.js");
var View$BsReactNative = require("bs-react-native/src/components/view.js");
var Style$BsReactNative = require("bs-react-native/src/style.js");
var StyleSheet$BsReactNative = require("bs-react-native/src/styleSheet.js");
var NavigationConfig$Hackernews = require("./NavigationConfig.bs.js");
var TouchableOpacity$BsReactNative = require("bs-react-native/src/components/touchableOpacity.js");

var styles = StyleSheet$BsReactNative.create({
      container: Style$BsReactNative.style(/* :: */[
            Style$BsReactNative.flex(1),
            /* :: */[
              Style$BsReactNative.backgroundColor(/* String */Block.__(0, ["#fff"])),
              /* [] */0
            ]
          ])
    });

var styles$1 = StyleSheet$BsReactNative.create({
      newsListContainer: Style$BsReactNative.style(/* :: */[
            Style$BsReactNative.padding(/* Pt */Block.__(0, [10])),
            /* :: */[
              Style$BsReactNative.borderBottomWidth(0.5),
              /* :: */[
                Style$BsReactNative.borderColor(/* String */Block.__(0, ["#eee"])),
                /* :: */[
                  Style$BsReactNative.flexDirection(/* Row */0),
                  /* :: */[
                    Style$BsReactNative.flex(1),
                    /* :: */[
                      Style$BsReactNative.maxHeight(/* Pt */Block.__(0, [100])),
                      /* :: */[
                        Style$BsReactNative.alignItems(/* Center */2),
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]),
      commentCounter: Style$BsReactNative.style(/* :: */[
            Style$BsReactNative.height(/* Pt */Block.__(0, [50])),
            /* :: */[
              Style$BsReactNative.width(/* Pt */Block.__(0, [50])),
              /* :: */[
                Style$BsReactNative.borderColor(/* String */Block.__(0, ["#eee"])),
                /* :: */[
                  Style$BsReactNative.borderWidth(1),
                  /* :: */[
                    Style$BsReactNative.padding(/* Pt */Block.__(0, [5])),
                    /* :: */[
                      Style$BsReactNative.justifyContent(/* Center */2),
                      /* :: */[
                        Style$BsReactNative.alignItems(/* Center */2),
                        /* :: */[
                          Style$BsReactNative.borderRadius(50),
                          /* [] */0
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]),
      leftContainer: Style$BsReactNative.style(/* :: */[
            Style$BsReactNative.flex(1),
            /* [] */0
          ]),
      titleText: Style$BsReactNative.style(/* :: */[
            Style$BsReactNative.fontSize(/* Float */Block.__(0, [20])),
            /* :: */[
              Style$BsReactNative.marginBottom(/* Pt */Block.__(0, [5])),
              /* [] */0
            ]
          ]),
      postDetail: Style$BsReactNative.style(/* :: */[
            Style$BsReactNative.flexDirection(/* Row */0),
            /* :: */[
              Style$BsReactNative.flex(1),
              /* :: */[
                Style$BsReactNative.alignItems(/* Center */2),
                /* [] */0
              ]
            ]
          ]),
      vote: Style$BsReactNative.style(/* :: */[
            Style$BsReactNative.padding(/* Pt */Block.__(0, [5])),
            /* :: */[
              Style$BsReactNative.backgroundColor(/* String */Block.__(0, ["orange"])),
              /* :: */[
                Style$BsReactNative.borderRadius(20),
                /* :: */[
                  Style$BsReactNative.marginRight(/* Pt */Block.__(0, [10])),
                  /* [] */0
                ]
              ]
            ]
          ]),
      textWhite: Style$BsReactNative.style(/* :: */[
            Style$BsReactNative.color(/* String */Block.__(0, ["#fff"])),
            /* [] */0
          ])
    });

var component = ReasonReact.statelessComponent("NewsList");

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
              return ReasonReact.element(undefined, undefined, TouchableOpacity$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(styles$1.newsListContainer), undefined, (function () {
                                  return Curry._1(navigation[/* push */0], /* Detail */1);
                                }), undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[
                              ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(styles$1.leftContainer), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[
                                        ReasonReact.element(undefined, undefined, Text$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(styles$1.titleText), undefined, undefined, undefined, undefined, undefined, undefined, "Apple Watch Review", /* array */[])),
                                        ReasonReact.element(undefined, undefined, Text$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "techcrunch.com", /* array */[])),
                                        ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(styles$1.postDetail), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[
                                                  ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(styles$1.vote), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[ReasonReact.element(undefined, undefined, Text$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(styles$1.textWhite), undefined, undefined, undefined, undefined, undefined, undefined, "1,250", /* array */[]))])),
                                                  ReasonReact.element(undefined, undefined, Text$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "by", /* array */[])),
                                                  ReasonReact.element(undefined, undefined, Text$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "John Doe", /* array */[]))
                                                ]))
                                      ])),
                              ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(styles$1.commentCounter), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[ReasonReact.element(undefined, undefined, Text$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "16", /* array */[]))]))
                            ]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var NewsList = /* module */[
  /* styles */styles$1,
  /* component */component,
  /* make */make
];

var component$1 = ReasonReact.statelessComponent("Home");

function make$1(stories, navigation, _) {
  return /* record */[
          /* debugName */component$1[/* debugName */0],
          /* reactClassInternal */component$1[/* reactClassInternal */1],
          /* handedOffState */component$1[/* handedOffState */2],
          /* willReceiveProps */component$1[/* willReceiveProps */3],
          /* didMount */component$1[/* didMount */4],
          /* didUpdate */component$1[/* didUpdate */5],
          /* willUnmount */component$1[/* willUnmount */6],
          /* willUpdate */component$1[/* willUpdate */7],
          /* shouldUpdate */component$1[/* shouldUpdate */8],
          /* render */(function () {
              return ReasonReact.element(undefined, undefined, Curry.app(NavigationConfig$Hackernews.StackNavigator[/* Screen */3][/* make */0], [
                              navigation,
                              undefined,
                              "Hacker News",
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              (function () {
                                  return ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(styles.container), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[$$Array.map((function (story) {
                                                          return ReasonReact.element(String(story[/* id */2]), undefined, make(navigation, /* array */[]));
                                                        }), stories)]));
                                })
                            ]));
            }),
          /* initialState */component$1[/* initialState */10],
          /* retainedProps */component$1[/* retainedProps */11],
          /* reducer */component$1[/* reducer */12],
          /* subscriptions */component$1[/* subscriptions */13],
          /* jsElementWrapped */component$1[/* jsElementWrapped */14]
        ];
}

exports.styles = styles;
exports.NewsList = NewsList;
exports.component = component$1;
exports.make = make$1;
/* styles Not a pure module */
