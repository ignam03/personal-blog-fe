export const Switcher = () => {
  // const [darkSide, setDarkSide] = useState(
  //   colorTheme === "light" ? true : false
  // );

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    //setTheme(colorTheme);
    //setDarkSide(checked);
  };
  return (
    <>
      {/* <div>
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={56}
        />
      </div> */}
      <label
        htmlFor="check"
        className="bg-lightGray py-1 px-1 w-[52px] mx-3 mt-1 h-[32px] rounded-full has-[:checked]:pl-6 transition-all duration-200"
        onChange={toggleDarkMode}
      >
        <div className="w-6 h-6 rounded-full bg-darkGray dark:bg-evil">
          <input id="check" type="checkbox" hidden />
        </div>
      </label>
    </>
  );
};
