const Hour = document.getElementById("Hour");
const Minute = document.getElementById("Minute");
const Second = document.getElementById("Second");
const Start = document.getElementById("Start");
const Stop = document.getElementById("Stop");
const Reset = document.getElementById("Reset");
let zero = "0";
let zero1 = "0";
let zero2 = "0";
let end;
let isClicked = false;
const CurrentTime = {
  Hour: 0,
  Minute: 0,
  Second: 0,
};

function start() {
  CurrentTime.Second++;
  Second.innerHTML = zero + CurrentTime.Second;
  console.log(Second.innerHTML);
  if (CurrentTime.Second == 60) {
    CurrentTime.Minute++;
    Minute.innerHTML = zero1 + CurrentTime.Minute;
    CurrentTime.Second = zero + 0;
    if (CurrentTime.Minute == 60) {
      CurrentTime.Hour++;
      Hour.innerHTML = zero2 + CurrentTime.Hour;
      CurrentTime.Minute = zero1 + 0;
      if (CurrentTime.Hour < 8) {
        zero2 = "0";
      } else if (CurrentTime.Hour > 8) {
        zero2 = " ";
      }
    }
    if (CurrentTime.Minute < 8) {
      zero1 = "0";
    } else if (CurrentTime.Minute > 8) {
      zero1 = " ";
    }
  }
  if (CurrentTime.Second < 8) {
    zero = "0";
  } else if (CurrentTime.Second > 8) {
    zero = " ";
  }
}

Start.addEventListener("click", function (event) {
  if (isClicked == false) {
    end = window.setInterval(start, 1000);
    isClicked = true;
  }
});

Stop.addEventListener("click", function () {
  window.clearInterval(end);
  isClicked = false;
});

Reset.addEventListener("click", function () {
  window.clearInterval(end);
  CurrentTime.Hour = 0;
  CurrentTime.Minute = 0;
  CurrentTime.Second = 0;
  Hour.innerHTML = zero2 + 0;
  Minute.innerHTML = zero1 + 0;
  Second.innerHTML = zero + 0;
  isClicked = false;
});
