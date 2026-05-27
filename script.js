const duas = [

"May Allah fill your life with happiness and barakah.",
"May your prayers be accepted and your heart stay peaceful.",
"Eid Mubarak! May Allah bless your family endlessly.",
"May this Hijri New Year bring you closer to Allah.",
"May your future shine with faith and success.",
"May Allah grant you health, peace and halal rizq.",
"Eid Mubarak! May your duas always be answered.",
"May your heart stay full of gratitude and iman.",
"May Allah protect you and guide you always.",
"May this 1448 AH be your year of blessings."

];

function generateGreeting(){

  const name = document.getElementById("nameInput").value;

  if(name.trim()===""){
    alert("Please enter your name");
    return;
  }

  document.getElementById("greetingBox").classList.remove("hidden");

  document.getElementById("greetingText").innerHTML =
    `🌙 Eid Mubarak, ${name}! ✨`;

  const randomDua =
    duas[Math.floor(Math.random()*duas.length)];

  document.getElementById("duaText").innerHTML =
    randomDua;

  launchFireworks();
}

function launchFireworks(){

  const duration = 5 * 1000;
  const end = Date.now() + duration;

  (function frame() {

    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });

    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }

  }());
}

function shareGreeting(){

  const name = document.getElementById("nameInput").value;

  const url =
    `${window.location.origin}${window.location.pathname}?name=${encodeURIComponent(name)}`;

  navigator.clipboard.writeText(url);

  alert("Greeting link copied!");
}

window.onload = function(){

  const params = new URLSearchParams(window.location.search);

  const sharedName = params.get("name");

  if(sharedName){

    document.getElementById("nameInput").value = sharedName;

    generateGreeting();
  }
}
