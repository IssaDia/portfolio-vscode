import { useState } from "react";

type UseToggle = () => [boolean, () => void];

const useToggle: UseToggle = () => {
  const [toggleValue, setToggle] = useState(false);
  const toggler = () => setToggle(!toggleValue);
  return [toggleValue, toggler];
};

export default useToggle;
