var VisualizerNode = React.createClass({
    render: function() {
                var model = this.props.model;
                var style = {
                    'position':     'absolute'
                };
                var classNames = [CSSClassName.VISUALIZER_NODE];

                const REQUIRED_KEYS = [
                    'width',
                    'height',
                    'left',
                    'top',
                ];

                const SUPPORTED_KEYS = REQUIRED_KEYS;

                REQUIRED_KEYS.forEach(
                    function (key, i, REQUIRED_KEYS) {
                        if (!model.hasOwnProperty(key)) {
                            classNames.push(CSSClassName['MISSING_' + key.toUpperCase()]);
                        }
                    }
                );

                SUPPORTED_KEYS.forEach(
                    function (key, i, SUPPORTED_KEYS) {
                        if (model.hasOwnProperty(key)) {
                            var value = model[key];

                            if (parseFloat(value).toString().length == value.length)
                                value += "px";

                            style[key] = value;
                        }
                    }
                );

                return React.DOM.li(
                    {
                        'className':    classNames.join(' '),
                        'style':        style,
                        'key':          model.name,     // Need to check with @d4tocchini that virtual names are globally-unique
                    },
                        model.name
                )
            }
});

var Visualizer = React.createClass({
    render: function() {
                var nodes = this.props.models.map(
                    function (model, i, models) {
                        return VisualizerNode({'model': model });
                    }
                );

                return React.DOM.ul(
                    {
                        'className':    [
                                           CSSClassName.VISUALIZER,
                                           this.props.key,
                                        ].join(' ')
                    },
                        nodes
                );
            }
});

var VisualizerGroup = React.createClass({
    render: function() {
                var groupsOfModels = this.props.groupsOfModels;

                var visualizers = Array.isArray(groupsOfModels)

                    ? this.props.groupsOfModels.map(
                          function (models, i, groupsOfModels) {
                              return Visualizer({'models': models});
                          }
                      )

                    : Object.keys(groupsOfModels).map(
                          function (key, i, keys) {
                              return Visualizer(
                                {
                                    'models':       groupsOfModels[key],
                                    'key':          key,
                                }
                            );
                          }
                      );


                return React.DOM.div(
                    {
                        'className': CSSClassName.VISUALIZER_GROUP,
                    },
                        visualizers
                );
            }
});