import { useState } from "react";

export default function useToggler() {
  const [show, setShow] = useState(false);

  function toggler() {
    setShow(!show);
  }

  return [show, toggler];
}
