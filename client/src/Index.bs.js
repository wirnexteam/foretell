// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var App$Client = require("./App.bs.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Client$Client = require("./Client.bs.js");
var ApolloProvider = require("reason-apollo/src/ApolloProvider.bs.js");

ReactDOMRe.renderToElementWithId(ReasonReact.element(undefined, undefined, ApolloProvider.make(Client$Client.instance, /* array */[ReasonReact.element(undefined, undefined, App$Client.make(/* array */[]))])), "app");

/*  Not a pure module */
