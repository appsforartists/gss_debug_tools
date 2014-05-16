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
                        'className': CSSClassName.VISUALIZER,
                    },
                        nodes
                );
            }
});