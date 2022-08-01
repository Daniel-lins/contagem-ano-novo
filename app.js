const secondsContainer = document.querySelector("#seconds");
const minutesContainer = document.querySelector("#minutes");
const hoursContainer = document.querySelector("#hours");
const daysChristmas = document.querySelector("#daysChristmas");
const daysNewYear = document.querySelector("#daysNewYear");
const nextYearContainer = document.querySelector("#year");
const spinnerLoading = document.querySelector("#loading");
const countDownContainer = document.querySelector("#countdown");
const titleContent = document.querySelector("#title");
const bodycontent = document.querySelector("#body");

// função de contagem regressiva para o ano novo
const NewYear = () => {
  const nextYear = new Date().getFullYear() + 1;
  const newYearTime = new Date(`january 01 ${nextYear} 00:00:00`);

  nextYearContainer.textContent = nextYear;

  titleContent.textContent = "Contagem Regressiva para o ano novo";
  bodycontent.style.backgroundImage = "url(./img/new-year.jpg)";

  const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
    secondsContainer.textContent = seconds < 10 ? "0" + seconds : seconds;
    minutesContainer.textContent = minutes < 10 ? "0" + minutes : minutes;
    hoursContainer.textContent = hours < 10 ? "0" + hours : hours;
    daysNewYear.textContent = days < 10 ? "0" + days : days;
  };

  const updateCountdown = () => {
    const currentTime = new Date();
    const difference = newYearTime - currentTime;
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;

    insertCountdownValues({ days, hours, minutes, seconds });
  };

  const handleCountDownDisplay = () => {
    spinnerLoading.remove();
    countDownContainer.style.display = "flex";
    daysNewYear.style.display = "flex";
    daysChristmas.style.display = "none";
  };

  setTimeout(handleCountDownDisplay, 1000);
  setInterval(updateCountdown, 1000);
};

// função de contagem regressiva para o natal
const christmas = () => {
  titleContent.textContent = "Contagem Regressiva para o Natal";
  bodycontent.style.backgroundImage = "url(./img/Merry_Christmas.jpg)";

  const nextChristmas = new Date().getFullYear();
  const newChristmasTime = new Date(`December 25 ${nextChristmas} 00:00:00`);
  nextYearContainer.style.display = "none";

  const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
    secondsContainer.textContent = seconds < 10 ? "0" + seconds : seconds;
    minutesContainer.textContent = minutes < 10 ? "0" + minutes : minutes;
    hoursContainer.textContent = hours < 10 ? "0" + hours : hours;
    daysChristmas.textContent = days < 10 ? "0" + days : days;
  };

  const updateCountdown = () => {
    const currentTime = new Date();
    const difference = newChristmasTime - currentTime;
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;

    insertCountdownValues({ days, hours, minutes, seconds });
  };

  const handleCountDownDisplayChristmas = () => {
    countDownContainer.style.display = "flex";
    spinnerLoading.remove();
    daysNewYear.style.display = "none";
    daysChristmas.style.display = "flex";
  };

  setTimeout(handleCountDownDisplayChristmas, 800);
  setInterval(updateCountdown, 1000);
};
