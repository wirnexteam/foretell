// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

function resolveOption(opt) {
  if (opt !== undefined) {
    return opt;
  } else {
    return "";
  }
}

function resolveRegex(exp, str) {
  var res = exp.exec(str);
  if (res !== null && res.length === 2) {
    var token = res[1];
    return resolveOption((token == null) ? undefined : Js_primitive.some(token));
  } else {
    return "";
  }
}

function apolloResponseToResult(result) {
  if (typeof result === "number") {
    return /* Error */Block.__(1, [React.createElement("div", undefined, "Loading")]);
  } else if (result.tag) {
    return /* Ok */Block.__(0, [result[0]]);
  } else {
    var error = result[0];
    console.log(error);
    return /* Error */Block.__(1, [React.createElement("div", undefined, "Error: " + error.message)]);
  }
}

function filterOptionalResult(errorMessage, result) {
  if (result !== undefined) {
    return /* Ok */Block.__(0, [Js_primitive.valFromOption(result)]);
  } else {
    return /* Error */Block.__(1, [errorMessage]);
  }
}

function ste(prim) {
  return prim;
}

function idd(e) {
  return e;
}

function filterAndFold(fn) {
  var partial_arg = /* array */[];
  return (function (param) {
      return $$Array.fold_left((function (acc, elem) {
                    return Curry._3(fn, elem, (function (e) {
                                  return $$Array.concat(/* :: */[
                                              acc,
                                              /* :: */[
                                                /* array */[e],
                                                /* [] */0
                                              ]
                                            ]);
                                }), (function () {
                                  return acc;
                                }));
                  }), partial_arg, param);
    });
}

exports.resolveOption = resolveOption;
exports.resolveRegex = resolveRegex;
exports.apolloResponseToResult = apolloResponseToResult;
exports.filterOptionalResult = filterOptionalResult;
exports.ste = ste;
exports.idd = idd;
exports.filterAndFold = filterAndFold;
/* react Not a pure module */
