open Utils;
open DataModel;

module Shared = Foretold__Components__Shared;

type measurable = Measurable.t;

module MeasurableEntityLinks = {
  let xEntityLink = (attribute, ~m: measurable, ~className: string) =>
    m
    |> attribute
    |> E.O.bind(_, Foretold__Components__Ken.findName)
    |> E.O.bind(_, r =>
         m
         |> attribute
         |> E.O.fmap(d =>
              <a href={d |> Foretold__Components__Ken.itemUrl} className>
                {r |> ste}
              </a>
            )
       );

  let nameEntityLink = xEntityLink(r => r.descriptionEntity);
  let propertyEntityLink = xEntityLink(r => r.descriptionProperty);
};

let formatDate = e =>
  e |> E.O.fmap(E.M.format(E.M.format_simple)) |> E.O.default("");

let link = (~m: measurable) =>
  <>
    {
      MeasurableEntityLinks.nameEntityLink(
        ~m,
        ~className=PrimaryTableStyles.itemLink,
      )
      |> E.O.React.defaultNull
    }
    {
      MeasurableEntityLinks.propertyEntityLink(
        ~m,
        ~className=PrimaryTableStyles.propertyLink,
      )
      |> E.O.React.defaultNull
    }
    <span className=PrimaryTableStyles.namme> {m.name |> ste} </span>
    {
      switch (m.descriptionDate |> E.O.fmap(E.M.goFormat_simple)) {
      | None => E.React.null
      | Some(e) =>
        [|
          <span className=PrimaryTableStyles.calDate> {"on " |> ste} </span>,
          <span className=PrimaryTableStyles.calDateO> {e |> ste} </span>,
        |]
        |> ReasonReact.array
      }
    }
  </>;

let description = (~m: measurable) =>
  switch (m.description) {
  | Some("")
  | None => E.React.null
  | Some(text) => <p> {text |> ste} </p>
  };

let endpointResponse = (~m: measurable) =>
  switch (
    m.resolutionEndpoint |> E.O.default(""),
    m.resolutionEndpointResponse,
  ) {
  | ("", _) => E.React.null
  | (_, Some(r)) =>
    "Current Endpoint Value: " ++ E.Float.with3DigitsPrecision(r) |> ste
  | _ => E.React.null
  };

let creatorLink = (~m: measurable) =>
  m.creator
  |> E.O.fmap((c: Agent.t) =>
       <div className=Shared.Item.item>
         <a href={Url.toString(AgentShow(c.id))}>
           {c.name |> E.O.default("") |> ste}
         </a>
       </div>
     )
  |> E.O.React.defaultNull;

let editLink = (~m: measurable) =>
  <div className=Shared.Item.item>
    <a
      href={Url.toString(MeasurableEdit(m.id))}
      className={Shared.Item.itemButton(NORMAL)}>
      {"Edit" |> ste}
    </a>
  </div>;

let measurements = (~m: measurable) =>
  switch (m.measurementCount) {
  | Some(0) => E.React.null
  | None => E.React.null
  | Some(count) =>
    <div className=Shared.Item.item>
      <Icon.Icon icon="BULB" />
      {count |> string_of_int |> ste}
    </div>
  };

let measurers = (~m: measurable) =>
  switch (m.measurerCount) {
  | Some(0) => E.React.null
  | None => E.React.null
  | Some(count) =>
    <div className=Shared.Item.item>
      <Icon.Icon icon="PEOPLE" />
      {count |> string_of_int |> ste}
    </div>
  };

let series = (~m: measurable) =>
  m.series
  |> E.O.bind(_, r =>
       switch (r.name) {
       | Some(name) =>
         Some(
           <div className=Shared.Item.item>
             <Icon.Icon icon="LAYERS" />
             <a
               href={
                 Url.toString(
                   SeriesShow(m.channel |> E.O.default(""), r.id),
                 )
               }>
               {name |> ste}
             </a>
           </div>,
         )
       | None => None
       }
     )
  |> E.O.React.defaultNull;

let expectedResolutionDate = (~m: measurable) =>
  <div className=Shared.Item.item>
    {"Resolves on " ++ (m.expectedResolutionDate |> formatDate) |> ste}
  </div>;

let resolutionEndpoint = (~m: measurable) =>
  switch (m.resolutionEndpoint |> E.O.default("")) {
  | "" => ReasonReact.null
  | text =>
    <div className=Shared.Item.item> {"Endpoint: " ++ text |> ste} </div>
  };

let archiveButton = (~m: measurable) =>
  Foretold__GraphQL.Mutations.MeasurableUnarchive.Mutation.make((mutation, _) =>
    <div className=Shared.Item.item>
      <div
        className={Shared.Item.itemButton(DANGER)}
        onClick={
          _ =>
            Foretold__GraphQL.Mutations.MeasurableUnarchive.mutate(
              mutation,
              m.id,
            )
        }>
        {"Archive" |> ste}
      </div>
    </div>
  )
  |> E.React.el;

let unArchiveButton = (~m: measurable) =>
  Foretold__GraphQL.Mutations.MeasurableArchive.Mutation.make((mutation, _) =>
    <div className=Shared.Item.item>
      <div
        className={Shared.Item.itemButton(DANGER)}
        onClick={
          _ =>
            Foretold__GraphQL.Mutations.MeasurableArchive.mutate(
              mutation,
              m.id,
            )
        }>
        {"Unarchive" |> ste}
      </div>
    </div>
  )
  |> E.React.el;

let archiveOption = (~m: measurable) =>
  Measurable.toStatus(m) !== ARCHIVED ?
    archiveButton(~m) : unArchiveButton(~m);