function onKeyDown(event) {
  switch (event.keyCode) {
    case KeyCode.SEMICOLON:
      if (event.ctrlKey)
        gssVisualizer.enabled = !gssVisualizer.enabled;

      break;
  }
}

window.addEventListener('keydown', onKeyDown);