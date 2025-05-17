// Change Theme

let body = document.querySelector("body");
let btn = document.querySelector("#changeTheme");
let darkIcon = document.querySelector("#d-sun");
let lightIcon = document.querySelector("#l-sun");
let savedTheme = localStorage.getItem("theme");

function updateIcons() {
  if (body.classList.contains("dark")) {
    darkIcon.style.display = "none";
    lightIcon.style.display = "block";
  } else {
    darkIcon.style.display = "block";
    lightIcon.style.display = "none";
  }
}

if (savedTheme === "dark") {
  body.classList.add("dark");
} else body.classList.add("light");

updateIcons();

btn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  updateIcons();
});

// Generating prompts and clearing textarea

let textarea = document.querySelector("textarea");
let newPromptBtn = document.getElementById("newPrompt");
let prompt = document.querySelector(".subheading");

newPromptBtn.addEventListener("click", function () {
  textarea.value = "";
  randomPrompt();
});

const prompts = [
  "How are you feeling right now?",
  "What’s something that made you smile recently?",
  "What’s one thing you’re grateful for today?",
  "What’s weighing on your mind?",
  "Describe your perfect day.",
  "What’s a recent challenge you overcame?",
  "Who makes you feel safe?",
  "What’s one fear you'd like to face?",
  "Write about a memory that shaped you.",
  "What’s your biggest dream?",
  "What habits are serving you well?",
  "What habits are draining you?",
  "If you could say anything to your younger self, what would it be?",
  "What are you avoiding right now?",
  "What gives your life meaning?",
  "Who do you admire and why?",
  "What does 'success' mean to you?",
  "When do you feel most like yourself?",
  "What would you do if you weren't afraid?",
  "What’s something you need to let go of?",
  "Write a letter to someone you’ve lost.",
  "What’s something you wish others knew about you?",
  "Describe your current mood using a metaphor.",
  "What energizes you?",
  "How do you define love?",
  "What does 'home' mean to you?",
  "What are your emotional triggers?",
  "What’s a lesson life keeps teaching you?",
  "When did you last feel truly at peace?",
  "Who has deeply impacted your life?",
  "What’s something you’re proud of but rarely talk about?",
  "How do you self-sabotage?",
  "What would your ideal future look like?",
  "When do you feel most creative?",
  "Describe a time you felt unstoppable.",
  "What role does social media play in your life?",
  "What’s your relationship with failure?",
  "What are you pretending not to know?",
  "What’s something you've never told anyone?",
  "What does your inner critic say?",
  "Write about a recent high and a recent low.",
  "If you could relive one day, which would it be?",
  "How do you cope with change?",
  "What makes you feel seen?",
  "What are you most afraid of losing?",
  "Describe the last dream you remember.",
  "What advice would you give yourself one year ago?",
  "How do you want to grow this year?",
  "What are you tolerating that you shouldn't be?",
  "How do you define peace?",
  "What’s your emotional safe space?",
  "What makes you feel alive?",
  "How do you react to conflict?",
  "What are your core values?",
  "What does forgiveness mean to you?",
  "Write a message to your future self.",
  "When do you feel most disconnected?",
  "What is your definition of strength?",
  "What would you do if no one judged you?",
  "How do you recharge?",
  "What parts of yourself are you hiding?",
  "What do you want to create?",
  "What beliefs do you hold that no longer serve you?",
  "How do you handle disappointment?",
  "What’s something you’re working on internally?",
  "What’s something you need to hear right now?",
  "What are you passionate about?",
  "How do you define authenticity?",
  "What are you afraid people will find out about you?",
  "Who are you when no one's watching?",
  "What are your emotional needs?",
  "What role does fear play in your life?",
  "Write about your happiest memory.",
  "What’s something you need to accept?",
  "Describe a moment of unexpected joy.",
  "How do you protect your energy?",
  "What’s one small act of kindness you’ll never forget?",
  "What are your emotional boundaries?",
  "What brings you clarity?",
  "How do you want to be remembered?",
  "What’s your favorite way to spend time alone?",
  "What gives you purpose?",
  "What do you need to forgive yourself for?",
  "What does your body need from you today?",
  "What keeps you up at night?",
  "When did you last cry, and why?",
  "How do you celebrate yourself?",
  "What inspires you creatively?",
  "What’s something you're learning to accept?",
  "What does vulnerability look like to you?",
  "What would you write in a letter to your future child?",
  "Describe the version of you you’re becoming.",
  "What kind of love do you crave?",
  "What’s your current source of stress?",
  "What’s your relationship with control?",
  "Where do you feel most grounded?",
  "What’s one story you keep telling yourself?",
  "How do you experience joy?",
  "What do you need to release?",
  "What does your ideal mental state feel like?",
  "What do you want to be known for?",
  "What makes you feel powerful?",
  "Write about a turning point in your life.",
  "What have you learned from heartbreak?",
  "What is your love language to yourself?",
  "How do you define self-worth?",
  "Where are you resisting growth?",
  "What kind of life are you building?",
  "What are you no longer willing to compromise on?",
  "What needs your attention right now?",
  "What’s something you wish you could forget?",
  "Describe your current emotional weather.",
  "What lie do you tell yourself most often?",
  "What part of today do you wish you could replay?",
  "What’s something you’ve always wanted to say but never did?",
  "What kind of magic do you believe in?",
  "If your thoughts had colors, what would today’s be?",
  "What’s a weird belief you secretly hold?",
  "What would your inner child say to you today?",
  "What are you most addicted to emotionally?",
  "If your soul had a voice, what would it say?",
  "Write a breakup letter to a bad habit.",
  "What moment are you still not over?",
  "What mask do you wear too often?",
  "What did you pretend to be okay with recently?",
  "What would you do if time paused for 24 hours?",
  "Where in your life are you settling?",
  "If your life had a theme song today, what would it be?",
  "What do you want to believe about yourself?",
  "What would your highest self do today?",
  "Describe your life as a metaphorical landscape.",
  "What unspoken rules are you tired of following?",
  "When was the last time you felt truly understood?",
  "What do you wish people asked you more often?",
  "What does burnout look like for you?",
  "If you had zero responsibilities tomorrow, what would you do?",
  "Where are you dimming your light to make others comfortable?",
  "What’s your relationship with silence?",
  "Write a journal entry from 10 years in the future.",
  "What’s something you’re afraid is true about you?",
  "Describe a time your intuition was right.",
  "What are your emotional red flags?",
  "What makes you feel like you’re 'too much'?",
  "What would change if you truly believed you were enough?",
  "What’s something you want to protect in yourself?",
  "What makes you feel out of control?",
  "If you were to vanish today, what would be left behind?",
  "What’s something beautiful you saw recently?",
  "What thought pattern do you want to break?",
  "How would your best friend describe you?",
  "What would you do if you couldn’t fail?",
  "What do you judge yourself for?",
  "Describe a recent moment of synchronicity.",
  "What is the cost of your current comfort zone?",
  "Who are you trying to prove something to?",
  "What does radical honesty mean to you?",
  "What would make this year meaningful?",
  "What is your relationship with rest?",
  "What memory feels like a movie scene?",
  "What does enough look like to you?",
  "What are you not giving yourself permission to feel?",
  "Describe your dream version of daily life.",
  "What patterns repeat in your relationships?",
  "What do you still need to grieve?",
  "What does your heart want more of?",
  "What if your pain was your superpower?",
  "What future version of you are you scared to meet?",
  "What emotion have you been avoiding?",
  "What makes you feel unsafe — emotionally?",
  "What version of yourself do you miss?",
  "What do you want to unlearn?",
  "What parts of you are still healing?",
  "When do you feel most disconnected from yourself?",
  "What would change if you stopped hiding?",
  "What makes your soul feel alive?",
  "What limiting belief are you ready to let go of?",
  "Who do you feel you have to be around others?",
  "What did you not get that you needed as a child?",
  "What is the story behind your favorite scar?",
  "What emotion do you struggle to express?",
  "What makes you feel powerful in a quiet way?",
  "If your mind was a room, what would it look like today?",
  "What’s something you’ve never said out loud?",
  "What are your emotional anchors?",
  "Describe a moment that shifted everything.",
  "What’s your personal definition of freedom?",
  "What does inner peace look like for you?",
  "What are you still holding onto from last year?",
  "What is something you wish you were better at handling?",
  "How do you react when things don’t go your way?",
  "What’s a truth you’ve recently uncovered?",
  "How do you sabotage your joy?",
  "What conversation changed your perspective?",
  "If emotions were weather, what’s your forecast?",
  "What do you crave when you feel overwhelmed?",
  "Where are you most afraid of being vulnerable?",
  "What would your ideal emotional toolkit include?",
  "What belief are you questioning right now?",
  "What needs to be said — and to whom?",
  "What does your comfort zone cost you?",
  "Describe a situation that felt like déjà vu.",
  "What do you wish you could relive just one more time?",
  "What do you need to hear from someone else — but could say to yourself instead?",
  "If your soul had a playlist, what songs would be on it?",
  "What’s your emotional weather report today?",
  "What’s something you’ve healed that you never thought you would?",
  "Where in your life are you not being honest with yourself?",
  "What’s one thing you're proud of growing out of?",
  "What’s one truth you’ve been avoiding lately?",
  "What would life look like if you forgave yourself completely?",
  "What do you feel when you sit in silence?",
  "How do you speak to yourself when no one’s listening?",
  "What does it mean to be truly free — to you?",
  "Where are you still seeking validation?",
  "What does growth feel like in your body?",
  "What does your intuition want you to know right now?",
];

function randomPrompt() {
  let idx = Math.floor(Math.random() * prompts.length);
  let newPrompt = prompts[idx];
  prompt.textContent = `${newPrompt}`;
}

// Saving user input

let saveBtn = document.getElementById("save");

function saveInput() {
  let userText = textarea.value;
  let userPrompt = prompt.textContent;
  let key = userPrompt + " " + `(${new Date().toISOString().split("T")[0]})`;
  localStorage.setItem(key, userText);
}

saveBtn.addEventListener("click", saveInput);

// Show user history

let showHistoryBtn = document.querySelector("#showHistoryBtn");

function showUserHistory() {
  let userHistory = document.querySelector("#history");

  userHistory.innerHTML = "";

  Object.keys(localStorage).forEach((key) => {
    if (key === "theme") return;

    let ansDiv = document.createElement("div");
    ansDiv.style.display = "flex";
    ansDiv.style.justifyContent = "space-between";

    let deleteBtnElem = document.createElement("button");
    deleteBtnElem.textContent = "Delete";
    deleteBtnElem.dataset.key = key;

    deleteBtnElem.addEventListener("click", function () {
      localStorage.removeItem(key);
      ansDiv.remove();
    });

    let keyDiv = document.createElement("div");
    let valueDiv = document.createElement("div");

    let ansKey = document.createElement("p");
    ansKey.classList.add("prompt");
    ansKey.textContent = key;
    keyDiv.appendChild(ansKey);

    let value = document.createElement("p");
    value.classList.add("response");
    value.textContent = localStorage.getItem(key);
    valueDiv.appendChild(value);

    deleteBtnElem.classList.add("delete-btn");

    ansDiv.appendChild(keyDiv);
    ansDiv.appendChild(valueDiv);
    ansDiv.appendChild(deleteBtnElem);

    userHistory.appendChild(ansDiv);
  });
}

showHistoryBtn.addEventListener("click", showUserHistory);

// Delete user history

let deleteAllBtn = document.querySelector("#deleteAllBtn");
let userHistory = document.querySelector("#history");

function deleteAll() {
  Object.keys(localStorage).forEach((key) => {
    if (key === "theme") return;
    localStorage.removeItem(key);
  });

  userHistory.style.textAlign = "center";

  setTimeout(function () {
    userHistory.innerHTML = "All reflections cleared.";
  }, 1000);

  setTimeout(function () {
    userHistory.innerHTML = "";
  }, 2000);
}

deleteAllBtn.addEventListener("click", deleteAll);
