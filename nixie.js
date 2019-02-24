//These functions help add, remove or toggle css classes
//Code based on https://codepen.io/lucitribal/pen/bRzKEv

//toggles a class attribute in id
function tog_class(id, cl) {
  var elem = document.getElementById(id);
  if (elem.classList.contains(cl) === true) {
    elem.classList.remove(cl);
  } else {
    elem.classList.add(cl);
  }
}

//adds a class attribute to id
function add_class(id, cl) {
  var elem = document.getElementById(id);
  if (elem.classList.contains(cl) !== true) {
    elem.classList.add(cl);
  }
}

//removes a class attribute from id
function rem_class(id, cl) {
  var elem = document.getElementById(id);
  if (elem.classList.contains(cl) === true) {
    elem.classList.remove(cl);
  }
}

//This function gets the date and does operations using H/M/S

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  var h1 = (h - h % 10) / 10;
  var h2 = h % 10;

  var m1 = (m - m % 10) / 10;
  var m2 = m % 10;

  var s1 = (s - s % 10) / 10;
  var s2 = s % 10;

  set_nix_class("s1", s1);
  set_nix_class("s2", s2);

  set_nix_class("m1", m1);
  set_nix_class("m2", m2);

  set_nix_class("h1", h1);
  set_nix_class("h2", h2);

  if(s2 % 2 == 0) {
      rem_class("nix_dot_1", "nix_open");
      add_class("nix_dot_2", "nix_open");
  } else {
      rem_class("nix_dot_2", "nix_open");
      add_class("nix_dot_1", "nix_open");
  }
    
  var t = setTimeout(startTime, 500); //call itself again after 0.5s
}

//This function calls the appropriate class changes 
// Removes the nix_open attribute at all the non-targets, and then add it to the target
function set_nix_class(target, val) {
  for (i = 0; i < 10; i++) {
    if (i != val) {
      rem_class("nix_" + target + "_" + i, "nix_open");
    }
  }
  add_class("nix_" + target + "_" + val, "nix_open");
}
