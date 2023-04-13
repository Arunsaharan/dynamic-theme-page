function myClock() {
  // Get Date
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  // Format Date according to Desired Format
  let myFormattedDay = today.toLocaleDateString("en-US", options);

  document.getElementById("today").innerHTML = myFormattedDay;

  // Get time
  let myHour = today.getHours();
  let myMin = today.getMinutes();
  let mySec = today.getSeconds();
  let mySession = document.getElementById("session");

  // Add AM/PM
  if (myHour >= 12) {
    mySession.innerHTML = "PM";
  } else {
    mySession.innerHTML = "AM";
  }

  // ADD Zero in front of single digit time
  let addZero = (n) => (parseInt(n) < 10 ? "0" + n : "" + n);

  // Update Clock
  if (myHour > 12) {
    myHour = myHour - 12;
  }
  document.getElementById("hours").innerHTML = addZero(myHour);
  document.getElementById("min").innerHTML = addZero(myMin);
  document.getElementById("sec").innerHTML = addZero(mySec);
}

setInterval(myClock, 1000);

// Change Background and Greetings

function changeBg() {
  let newDay = new Date();
  let thisHour = newDay.getHours();

  if (thisHour < 12) {
    // morning
    document
      .getElementById("first-page")
      .setAttribute(
        "style",
        "background: linear-gradient(rgba(35, 24, 52, 0.5), rgba(35, 24, 52, 0.5)),url('images/morning.jpg');background-position: center;background-size: cover;background-repeat: no-repeat;"
      );
    greetings.textContent = "Good Morning ";
  } else if (thisHour < 18) {
    // Afternoon
    document
      .getElementById("first-page")
      .setAttribute(
        "style",
        "background: linear-gradient(rgba(35, 24, 52, 0.5), rgba(35, 24, 52, 0.5)),url('images/evening.jpg');background-position: center;background-size: cover;background-repeat: no-repeat;"
      );
    greetings.textContent = "Good Afternoon ";
  } else {
    // evening
    document
      .getElementById("first-page")
      .setAttribute(
        "style",
        "background: linear-gradient(rgba(35, 24, 52, 0.5), rgba(35, 24, 52, 0.5)),url('images/night.jpg'); background-position: center;background-size: cover;background-repeat: no-repeat;"
      );
    greetings.textContent = "Good Evening ";
  }
}

changeBg();

// apply dark theme

const darkButton = document.getElementById("darkMode");
let btnVal = true;
function changeBtnVal() {
  btnVal = !btnVal;
  if (btnVal === false) {
    document
      .getElementById("first-page")
      .setAttribute("style", "background:#181818");
    document.getElementById("box1").classList.add("container");
    document.getElementById("box2").classList.add("container");
  } else {
    document.getElementById("box1").classList.remove("container");
    document.getElementById("box2").classList.remove("container");
    changeBg();
  }
}

darkButton.addEventListener("click", changeBtnVal);

// clear local storage

const clearBtn = document.getElementById("clear");

function clearStorage() {
  localStorage.removeItem("name");
  localStorage.removeItem("focus");
  location.reload();
}

clearBtn.addEventListener("click", clearStorage);

//  save name and focus in local storage

const your_name = document.getElementById("name"),
  your_focus = document.getElementById("focus");

function getItem(item, itemName) {
  if (localStorage.getItem(`${itemName}`) === null) {
    item.textContent = `Enter ${itemName}`;
  } else {
    item.textContent = localStorage.getItem(`${itemName}`);
  }
}

getItem(your_name, "name");
getItem(your_focus, "focus");

function setName(e) {
  if (e.type == "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      your_name.blur();
    } else {
      localStorage.setItem("name", e.target.innerText);
    }
  }
}

your_name.addEventListener("keypress", setName);
your_name.addEventListener("blur", setName);

function setFocus(e) {
  if (e.type == "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      your_focus.blur();
    } else {
      localStorage.setItem("focus", e.target.innerText);
    }
  }
}

your_focus.addEventListener("keypress", setFocus);
your_focus.addEventListener("blur", setFocus);
