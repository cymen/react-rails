var ctx = require.context("components", true)
var otherCtx = require.context("otherComponents", true)
var ReactRailsUJS = require("react_ujs")
ReactRailsUJS.useContexts([ctx, otherCtx])
var React = require("react")

window.GlobalComponent = function(props) {
  return React.createElement("h1", null, "Global Component")
}
