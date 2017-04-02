var togle_drawer = function() {
  var drawer = document.querySelector('.mdl-layout');
  if(drawer.classList.contains("is-small-screen")) {
    drawer.MaterialLayout.drawerToggleHandler_();
  };
};
