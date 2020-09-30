import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [someValue, setSomeValue] = useLocalStorage("itsDark");
  return [someValue, setSomeValue];
};

export default useDarkMode;
