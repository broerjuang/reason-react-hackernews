'use strict';

var StackNavigator$RerouteNative = require("reroute-native/src/StackNavigator.js");

var Config = /* module */[];

var include = StackNavigator$RerouteNative.CreateStackNavigator(Config);

var StackNavigator = include[0];

exports.Config = Config;
exports.StackNavigator = StackNavigator;
/* include Not a pure module */
