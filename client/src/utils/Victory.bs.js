// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var Victory = require("victory");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_undefined = require("bs-platform/lib/js/js_undefined.js");
var VictoryMeasurementJs = require("./VictoryMeasurement.js");

var VictoryTheme = /* module */[];

function make(data, children) {
  return ReasonReact.wrapJsForReason(Victory.VictoryBar, {
              data: Js_undefined.fromOption(data)
            }, children);
}

var VictoryBar = /* module */[/* make */make];

function make$1(colorScale, children) {
  return ReasonReact.wrapJsForReason(Victory.VictoryStack, {
              colorScale: Js_undefined.fromOption(colorScale)
            }, children);
}

var VictoryStack = /* module */[/* make */make$1];

function make$2(domainPadding, theme, scale, maxDomain, minDomain, padding, height, width, children) {
  return ReasonReact.wrapJsForReason(Victory.VictoryChart, {
              domainPadding: Js_undefined.fromOption(domainPadding),
              theme: Js_undefined.fromOption(theme),
              scale: Js_undefined.fromOption(scale),
              maxDomain: Js_undefined.fromOption(maxDomain),
              minDomain: Js_undefined.fromOption(minDomain),
              padding: Js_undefined.fromOption(padding),
              height: Js_undefined.fromOption(height),
              width: Js_undefined.fromOption(width)
            }, children);
}

var VictoryChart = /* module */[/* make */make$2];

function make$3(tickValues, height, style, scale, tickFormat, dependentAxis, children) {
  return ReasonReact.wrapJsForReason(Victory.VictoryAxis, {
              height: Js_undefined.fromOption(height),
              tickValues: Js_undefined.fromOption(tickValues),
              tickFormat: Js_undefined.fromOption(tickFormat),
              dependentAxis: Js_undefined.fromOption(dependentAxis),
              style: Js_undefined.fromOption(style),
              scale: Js_undefined.fromOption(scale)
            }, children);
}

var VictoryAxis = /* module */[/* make */make$3];

function make$4(animate, data, $staropt$star, style, children) {
  var interpolation = $staropt$star !== undefined ? $staropt$star : "linear";
  return ReasonReact.wrapJsForReason(Victory.VictoryArea, {
              animate: Js_undefined.fromOption(animate),
              data: Js_undefined.fromOption(data),
              style: Js_undefined.fromOption(style),
              interpolation: interpolation
            }, children);
}

var VictoryArea = /* module */[/* make */make$4];

function make$5(data, style, children) {
  return ReasonReact.wrapJsForReason(Victory.VictoryLine, {
              data: Js_undefined.fromOption(data),
              style: Js_undefined.fromOption(style)
            }, children);
}

var VictoryLine = /* module */[/* make */make$5];

function make$6(data, style, children) {
  return ReasonReact.wrapJsForReason(Victory.victoryScatter, {
              data: Js_undefined.fromOption(data),
              style: Js_undefined.fromOption(style)
            }, children);
}

var VictoryScatter = /* module */[/* make */make$6];

function make$7(point, scale, color, children) {
  return ReasonReact.wrapJsForReason(VictoryMeasurementJs.VictoryMeasurement, {
              point: Js_undefined.fromOption(point),
              scale: Js_undefined.fromOption(scale),
              color: Js_undefined.fromOption(color)
            }, children);
}

var VictoryMeasurement = /* module */[/* make */make$7];

exports.VictoryTheme = VictoryTheme;
exports.VictoryBar = VictoryBar;
exports.VictoryStack = VictoryStack;
exports.VictoryChart = VictoryChart;
exports.VictoryAxis = VictoryAxis;
exports.VictoryArea = VictoryArea;
exports.VictoryLine = VictoryLine;
exports.VictoryScatter = VictoryScatter;
exports.VictoryMeasurement = VictoryMeasurement;
/* victory Not a pure module */
