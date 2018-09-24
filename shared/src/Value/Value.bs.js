// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Belt_Id = require("bs-platform/lib/js/belt_Id.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Belt_Map = require("bs-platform/lib/js/belt_Map.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");
var Result$Rationale = require("rationale/src/Result.js");
var Function$Rationale = require("rationale/src/Function.js");

function decodeResult(fn, json) {
  try {
    return /* Ok */Block.__(0, [Curry._1(fn, json)]);
  }
  catch (raw_exn){
    var exn = Js_exn.internalToOCamlException(raw_exn);
    if (exn[0] === Json_decode.DecodeError) {
      return /* Error */Block.__(1, [exn[1]]);
    } else {
      return /* Error */Block.__(1, ["Unknown Error."]);
    }
  }
}

function makeDecode(decodeFn) {
  return (function (param) {
      return decodeResult((function (param) {
                    return Json_decode.field("data", decodeFn, param);
                  }), param);
    });
}

function makeEncode(encodeFn, name, i) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "dataType",
                name
              ],
              /* :: */[
                /* tuple */[
                  "data",
                  Curry._1(encodeFn, i)
                ],
                /* [] */0
              ]
            ]);
}

function MakeByPercentile(Item) {
  var cmp = Caml_obj.caml_compare;
  var Id = Belt_Id.MakeComparable(/* module */[/* cmp */cmp]);
  var toArray = Belt_Map.toArray;
  var toDict = function (t) {
    return Js_dict.fromArray($$Array.map((function (param) {
                      return /* tuple */[
                              Pervasives.string_of_float(param[0]),
                              param[1]
                            ];
                    }), Belt_Map.toArray(t)));
  };
  var fromArray = function (a) {
    return (function (param) {
                return Belt_Map.fromArray(param, Id);
              })(a);
  };
  var fromDict = function (r) {
    return (function (param) {
                return Belt_Map.fromArray(param, Id);
              })($$Array.map((function (param) {
                      return /* tuple */[
                              Caml_format.caml_float_of_string(param[0]),
                              param[1]
                            ];
                    }), Js_dict.entries(r)));
  };
  var partial_arg = Item[/* decodeFn */2];
  var partial_arg$1 = function (param) {
    return Json_decode.dict(partial_arg, param);
  };
  var partial_arg$2 = function (param) {
    return Json_decode.field("data", partial_arg$1, param);
  };
  var partial_arg$3 = Function$Rationale.Infix[/* ||> */1];
  var partial_arg$4 = function (param) {
    return partial_arg$3(partial_arg$2, fromDict, param);
  };
  var decode = function (param) {
    return decodeResult(partial_arg$4, param);
  };
  var encode = function (name, t) {
    var dic = toDict(t);
    return Json_encode.object_(/* :: */[
                /* tuple */[
                  "dataType",
                  name
                ],
                /* :: */[
                  /* tuple */[
                    "data",
                    Js_dict.map((function (value) {
                            return Curry._1(Item[/* encodeFn */1], value);
                          }), dic)
                  ],
                  /* [] */0
                ]
              ]);
  };
  return /* module */[
          /* Id */Id,
          /* toArray */toArray,
          /* toDict */toDict,
          /* fromArray */fromArray,
          /* of_string */"stuff here",
          /* fromDict */fromDict,
          /* decode */decode,
          /* encode */encode
        ];
}

function equal(a, b) {
  return a === b;
}

function encodeFn(prim) {
  return prim;
}

var FloatPoint = /* module */[
  /* equal */equal,
  /* decodeFn */Json_decode.$$float,
  /* encodeFn */encodeFn
];

function equal$1(a, b) {
  return a === b;
}

function encodeFn$1(prim) {
  return prim;
}

var DateTimePoint = /* module */[
  /* equal */equal$1,
  /* encodeFn */encodeFn$1,
  /* decodeFn */Json_decode.string
];

var cmp = Caml_obj.caml_compare;

var Id = Belt_Id.MakeComparable(/* module */[/* cmp */cmp]);

var toArray = Belt_Map.toArray;

function toDict(t) {
  return Js_dict.fromArray($$Array.map((function (param) {
                    return /* tuple */[
                            Pervasives.string_of_float(param[0]),
                            param[1]
                          ];
                  }), Belt_Map.toArray(t)));
}

function fromArray(a) {
  return (function (param) {
              return Belt_Map.fromArray(param, Id);
            })(a);
}

function fromDict(r) {
  return (function (param) {
              return Belt_Map.fromArray(param, Id);
            })($$Array.map((function (param) {
                    return /* tuple */[
                            Caml_format.caml_float_of_string(param[0]),
                            param[1]
                          ];
                  }), Js_dict.entries(r)));
}

var partial_arg = Function$Rationale.Infix[/* ||> */1];

function partial_arg$1(param) {
  return partial_arg((function (param) {
                return Json_decode.field("data", (function (param) {
                              return Json_decode.dict(Json_decode.$$float, param);
                            }), param);
              }), fromDict, param);
}

function decode(param) {
  return decodeResult(partial_arg$1, param);
}

function encode(name, t) {
  var dic = toDict(t);
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "dataType",
                name
              ],
              /* :: */[
                /* tuple */[
                  "data",
                  Js_dict.map((function (value) {
                          return value;
                        }), dic)
                ],
                /* [] */0
              ]
            ]);
}

var FloatPercentiles = /* module */[
  /* Id */Id,
  /* toArray */toArray,
  /* toDict */toDict,
  /* fromArray */fromArray,
  /* of_string */"stuff here",
  /* fromDict */fromDict,
  /* decode */decode,
  /* encode */encode
];

var cmp$1 = Caml_obj.caml_compare;

var Id$1 = Belt_Id.MakeComparable(/* module */[/* cmp */cmp$1]);

var toArray$1 = Belt_Map.toArray;

function toDict$1(t) {
  return Js_dict.fromArray($$Array.map((function (param) {
                    return /* tuple */[
                            Pervasives.string_of_float(param[0]),
                            param[1]
                          ];
                  }), Belt_Map.toArray(t)));
}

function fromArray$1(a) {
  return (function (param) {
              return Belt_Map.fromArray(param, Id$1);
            })(a);
}

function fromDict$1(r) {
  return (function (param) {
              return Belt_Map.fromArray(param, Id$1);
            })($$Array.map((function (param) {
                    return /* tuple */[
                            Caml_format.caml_float_of_string(param[0]),
                            param[1]
                          ];
                  }), Js_dict.entries(r)));
}

var partial_arg$2 = Function$Rationale.Infix[/* ||> */1];

function partial_arg$3(param) {
  return partial_arg$2((function (param) {
                return Json_decode.field("data", (function (param) {
                              return Json_decode.dict(Json_decode.string, param);
                            }), param);
              }), fromDict$1, param);
}

function decode$1(param) {
  return decodeResult(partial_arg$3, param);
}

function encode$1(name, t) {
  var dic = toDict$1(t);
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "dataType",
                name
              ],
              /* :: */[
                /* tuple */[
                  "data",
                  Js_dict.map((function (value) {
                          return value;
                        }), dic)
                ],
                /* [] */0
              ]
            ]);
}

var DateTimePercentiles = /* module */[
  /* Id */Id$1,
  /* toArray */toArray$1,
  /* toDict */toDict$1,
  /* fromArray */fromArray$1,
  /* of_string */"stuff here",
  /* fromDict */fromDict$1,
  /* decode */decode$1,
  /* encode */encode$1
];

function hasQuartiles(t) {
  if (Belt_Map.has(t, 25.0) && Belt_Map.has(t, 50.0)) {
    return Belt_Map.has(t, 75.0);
  } else {
    return false;
  }
}

function error(t) {
  if (typeof t === "number") {
    return undefined;
  } else {
    var variant = t[0];
    var exit = 0;
    if (variant >= 393953339) {
      if (variant !== 564146209) {
        if (variant !== 1061801627) {
          return undefined;
        } else {
          exit = 1;
        }
      } else {
        var i = t[1];
        if (i === 0 || i === 1) {
          return undefined;
        } else {
          return "Must be 0 or 1";
        }
      }
    } else if (variant !== -488794310) {
      if (variant >= 393953338) {
        exit = 1;
      } else {
        return undefined;
      }
    } else {
      var i$1 = t[1];
      if (0.0 <= i$1 && i$1 <= 100.0) {
        return undefined;
      } else {
        return "Must be between 0 and 100";
      }
    }
    if (exit === 1) {
      if (hasQuartiles(t[1])) {
        return undefined;
      } else {
        return "Missing quartiles";
      }
    }
    
  }
}

function isValid(t) {
  var match = error(t);
  return match === undefined;
}

function typeToName(t) {
  var variant = t[0];
  if (variant >= -488794310) {
    if (variant >= 564146209) {
      if (variant >= 1061801627) {
        return "dateTimePercentiles";
      } else {
        return "binary";
      }
    } else if (variant >= 393953338) {
      return "floatPercentiles";
    } else {
      return "percentagePoint";
    }
  } else if (variant >= -606499532) {
    return "floatPoint";
  } else {
    return "dateTimePoint";
  }
}

function nameToType(param) {
  switch (param) {
    case "binary" : 
        return /* Ok */Block.__(0, [/* Binary */564146209]);
    case "dateTimePercentiles" : 
        return /* Ok */Block.__(0, [/* DateTimePercentiles */1061801627]);
    case "dateTimePoint" : 
        return /* Ok */Block.__(0, [/* DateTimePoint */-802738987]);
    case "floatPercentiles" : 
        return /* Ok */Block.__(0, [/* FloatPercentiles */393953338]);
    case "floatPoint" : 
        return /* Ok */Block.__(0, [/* FloatPoint */-606499532]);
    case "percentagePoint" : 
        return /* Ok */Block.__(0, [/* Percentage */-488794310]);
    default:
      return /* Error */Block.__(1, ["Not found"]);
  }
}

function stringOfValue(t) {
  var variant = t[0];
  if (variant !== 393953338) {
    if (variant >= 564146209) {
      if (variant >= 1061801627) {
        return "Implement Me";
      } else {
        return String(t[1]);
      }
    } else if (variant >= -606499532) {
      return Pervasives.string_of_float(t[1]);
    } else {
      return t[1];
    }
  } else {
    var t$1 = t[1];
    var per = function (perc) {
      return String(Belt_Map.getWithDefault(t$1, perc, 0.0) | 0);
    };
    var p25 = per(25.0);
    var p50 = per(50.0);
    var p75 = per(75.0);
    return "{25: " + (String(p25) + (", 50: " + (String(p50) + (", 75: " + (String(p75) + "} ")))));
  }
}

function encode$2(e) {
  var n = typeToName(e);
  var variant = e[0];
  if (variant >= -488794310) {
    if (variant >= 564146209) {
      if (variant >= 1061801627) {
        return encode$1(n, e[1]);
      } else {
        return makeEncode((function (prim) {
                      return prim;
                    }), n, e[1]);
      }
    } else if (variant >= 393953338) {
      return encode(n, e[1]);
    } else {
      return makeEncode((function (prim) {
                    return prim;
                  }), n, e[1]);
    }
  } else if (variant >= -606499532) {
    return makeEncode((function (prim) {
                  return prim;
                }), n, e[1]);
  } else {
    return makeEncode((function (prim) {
                  return prim;
                }), n, e[1]);
  }
}

function convert(decoder, toValue, json) {
  return Curry._2(Result$Rationale.Infix[/* <$> */1], Curry._1(decoder, json), toValue);
}

function decoder(a, j) {
  if (a >= -488794310) {
    if (a >= 564146209) {
      if (a >= 1061801627) {
        return convert(decode$1, (function (e) {
                      return /* `DateTimePercentiles */[
                              1061801627,
                              e
                            ];
                    }), j);
      } else {
        return convert((function (param) {
                      return decodeResult((function (param) {
                                    return Json_decode.field("data", Json_decode.$$int, param);
                                  }), param);
                    }), (function (e) {
                      return /* `Binary */[
                              564146209,
                              e
                            ];
                    }), j);
      }
    } else if (a >= 393953338) {
      return convert(decode, (function (e) {
                    return /* `FloatPercentiles */[
                            393953338,
                            e
                          ];
                  }), j);
    } else {
      return convert((function (param) {
                    return decodeResult((function (param) {
                                  return Json_decode.field("data", Json_decode.$$float, param);
                                }), param);
                  }), (function (e) {
                    return /* `Percentage */[
                            -488794310,
                            e
                          ];
                  }), j);
    }
  } else if (a >= -606499532) {
    return convert((function (param) {
                  return decodeResult((function (param) {
                                return Json_decode.field("data", Json_decode.$$float, param);
                              }), param);
                }), (function (e) {
                  return /* `FloatPoint */[
                          -606499532,
                          e
                        ];
                }), j);
  } else {
    return convert((function (param) {
                  return decodeResult((function (param) {
                                return Json_decode.field("data", Json_decode.string, param);
                              }), param);
                }), (function (e) {
                  return /* `DateTimePoint */[
                          -802738987,
                          e
                        ];
                }), j);
  }
}

function decode$2(j) {
  var t = Json_decode.field("dataType", Json_decode.string, j);
  var decodingType = nameToType(t);
  if (decodingType.tag) {
    return /* Error */Block.__(1, [decodingType[0]]);
  } else {
    return decoder(decodingType[0], j);
  }
}

exports.decodeResult = decodeResult;
exports.makeDecode = makeDecode;
exports.makeEncode = makeEncode;
exports.MakeByPercentile = MakeByPercentile;
exports.FloatPoint = FloatPoint;
exports.DateTimePoint = DateTimePoint;
exports.FloatPercentiles = FloatPercentiles;
exports.DateTimePercentiles = DateTimePercentiles;
exports.hasQuartiles = hasQuartiles;
exports.error = error;
exports.isValid = isValid;
exports.typeToName = typeToName;
exports.nameToType = nameToType;
exports.stringOfValue = stringOfValue;
exports.encode = encode$2;
exports.convert = convert;
exports.decoder = decoder;
exports.decode = decode$2;
/* Id Not a pure module */
