import React, { useEffect, useState } from "react";

const useMousePositon = () => {
  const [positon, setPosition] = useState({ x: 0, y: 0 });
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("挂载");
    const updateMouse = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setCount(count + 1);
    };
    document.addEventListener("click", updateMouse);
    return () => {
      console.log("卸载");

      document.removeEventListener("click", updateMouse);
    };
  });
  return positon;
};

export default useMousePositon;
