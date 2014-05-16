var addClassName = function (className, element) {
    element = element || document.body;

    element.classList.add(className);
};

var removeClassName = function (className, element) {
    element = element || document.body;

    element.classList.add(className);
};

var classNameIsActive = function (className, element) {
    element = element || document.body;

    return element.classList.contains(className);
};

var toggleClassName = function (className, element) {
    element = element || document.body;

    if (classNameIsActive(className, element)) {
        removeClassName(className, element);
    } else {
        addClassName(className, element);
    }
};