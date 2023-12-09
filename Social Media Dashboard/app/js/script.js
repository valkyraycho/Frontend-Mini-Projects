const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const body = document.body;
const radioButtons = document.querySelectorAll(".toggle__wrapper input");

const DARK = "dark";
const LIGHT = "light";

const switchTheme = () => {
  radioButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      console.log("clicked button");
      darkButton.checked ? setDarkTheme() : setLightTheme();
    });
  });
};

const setLightTheme = () => {
  body.classList = "light";
  localStorage.setItem("Theme", "light");
};

const setDarkTheme = () => {
  body.classList = "dark";
  localStorage.setItem("Theme", "dark");
};

const checkThemeChange = () => {
  matchMedia("(prefers-color-scheme: dark)").addEventListener(
    "change",
    (event) => {
      event.matches ? darkButton.click() : lightButton.click();
    }
  );
};

const themeFromLocalStorage = () => {
  return localStorage.getItem("Theme");
};

const themeFromPreference = () => {
  return matchMedia("(prefers-color-scheme: dark)").matches ? DARK : LIGHT;
};

const loadAndUpdateColor = () => {
  const theme = themeFromLocalStorage() || themeFromPreference();
  theme === DARK ? darkButton.click() : lightButton.click();
  console.log(theme);
};

switchTheme();
checkThemeChange();
loadAndUpdateColor();
