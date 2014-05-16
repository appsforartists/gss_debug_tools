function onKeyDown(event) {
  switch (event.keyCode) {
    case KeyCode.SEMICOLON:
      if (event.ctrlKey)
        toggleClassName(CSSClassName.SHOW_VIRTUALS);

      break;
  }
}

window.addEventListener('keydown', onKeyDown);