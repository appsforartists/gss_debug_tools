var gssVisualizer = new (function GSSVisualizer() {
    var self = this;

    var _container;

    var _enabled = false;
    var _models  = {
        'unsorted':      null,
        'rows':          null,
        'columns':       null,
        'bidimensional': null,
    };

    Object.defineProperty(
        this,
        'enabled',
        {
            'get':  function () {
                        return _enabled;
                    },

            'set':  function (value) {
                        if (value != _enabled) {
                            _enabled = value;

                            if (value) {
                                self.redraw();

                            } else {
                                _container.innerHTML = '';
                            }
                        }
                    },
        }
    );

    Object.defineProperty(
        this,
        'models',
        {
            'set':  function (value) {
                        _models['unsorted'] = value.slice();

                        if (self.enabled)
                            self.redraw();
                    },
        }
    );

    var __init__ = function () {
        // Uses a shadow root to keep host CSS from fucking with ours
        var root = document.createElement('div');
        root.setAttribute('id', 'gss_visualizer_root');
        document.body.appendChild(root);

        root = root.createShadowRoot();

        // Chrome's Extension API doesn't let us include the CSS as a <link>, so we brute-force
        var style = document.createElement('style');

        reqwest({
            'url':  hostAPI.getURL('common/visualizer.css'),
            'type': 'text/css'
        }).then(
            function (xhr) {
                style.innerHTML = xhr.responseText;
            }
        );

        root.appendChild(style);

        _container = document.createElement('div');
        root.appendChild(_container);
    };

    self.redraw = function () {
        if (_models['unsorted'] && _models['unsorted'].length) {

            _models['rows']    = [];
            _models['columns'] = [];

            _models['bidimensional'] = _models['unsorted'].filter(
                function (model, i, unsortedModels) {
                    if (
                        (model.hasOwnProperty('height') && model.hasOwnProperty('top')) &&
                        !(model.hasOwnProperty('width') && model.hasOwnProperty('left'))
                    ) {
                        _models['rows'].push(model);
                        return false;

                    } else if (
                          (model.hasOwnProperty('width') && model.hasOwnProperty('left')) &&
                        !(model.hasOwnProperty('height') && model.hasOwnProperty('top'))
                    ) {
                        _models['columns'].push(model);
                        return false;
                    }

                    return true;
                }
            );

            _models['unsorted'] = null;

            modelsByClassName = {};
            modelsByClassName[CSSClassName.ROWS_VISUALIZER]          = _models['rows'],
            modelsByClassName[CSSClassName.COLUMNS_VISUALIZER]       = _models['columns'],
            modelsByClassName[CSSClassName.BIDIMENSIONAL_VISUALIZER] = _models['bidimensional'],

            React.renderComponent(
                VisualizerGroup(
                    {
                        'groupsOfModels':   modelsByClassName,
                    }
                ),
                _container
            );
        }
    }

    __init__();
})();

gssVisualizer.models = [
    {
        "name":     "c1",
        "left":     62.2921446445661,
        "width":    53.874287260165694
    }, {
        "name":     "c2",
        "left":     133.00214667353413,
        "width":    53.874287260165694
    }, {
        "name":     "c3",
        "left":     203.71214870250088,
        "width":    53.874287260165694
    }, {
        "name":     "c4",
        "left":     274.4221507314686,
        "width":    53.874287260165694
    }, {
        "name":     "c5",
        "left":     320.51848441336756,
        "width":    53.874287260165694
    }, {
        "name":     "c6",
        "left":     391.22848644233557,
        "width":    53.874287260165694
    }, {
        "name":     "c7",
        "left":     461.9384884713028,
        "width":    53.874287260165694
    }, {
        "name":     "c8",
        "left":     550.282845210597,
        "width":    53.874287260165694
    }, {
        "name":     "c9",
        "left":     620.9928472395641,
        "width":    53.874287260165694
    }, {
        "name":     "c10",
        "left":     691.7028492685317,
        "width":    53.874287260165694
    }, {
        "name":     "c11",
        "left":     762.4128512974996,
        "width":    53.874287260165694
    }, {
        "name":     "c12",
        "left":     833.1228533264658,
        "width":    53.874287260165694
    }, {
        "name":     "c13",
        "left":     903.8328553554336,
        "width":    53.874287260165694
    }, {
        "name":     "c14",
        "left":     1007.4135640373319,
        "width":    53.874287260165694
    }, {
        "name":     "c15",
        "left":     1078.1235660663006,
        "width":    53.874287260165694
    }, {
        "name":     "c16",
        "left":     1148.8335680952687,
        "width":    53.874287260165694
    }, {
        "top":      10,
        "left":     10,
        "width":    20,
        "height":   20,
    }, {
        "top":      16,
        "height":   32,
    }, {
        "top":      64,
        "height":   32,
    }, {
        "top":      112,
        "height":   32,
    }, {
        "top":      160,
        "height":   32,
    },
];
