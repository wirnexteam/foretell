[@bs.module "antd/lib/date-picker/index"]
external reactClass: ReasonReact.reactClass = "default";

[%bs.raw {|require("antd/lib/date-picker/style")|}];

[@bs.obj]
external makeProps:
  (
    ~className: string=?,
    ~style: ReactDOMRe.Style.t=?,
    ~value: MomentRe.Moment.t=?,
    ~onChange: MomentRe.Moment.t => unit=?,
    unit
  ) =>
  _ =
  "";

let make = (~className=?, ~style=?, ~onChange=?, ~value=?, children) =>
  ReasonReact.wrapJsForReason(
    ~reactClass,
    ~props=makeProps(~className?, ~style?, ~onChange?, ~value?, ()),
    children,
  );