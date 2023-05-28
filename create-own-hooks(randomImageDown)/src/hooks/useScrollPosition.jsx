import React, { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsBottom(
        // This will give me the scroll is bottom orsetIsBottom
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight
      );
    });
  }, []);
  return { isBottom };
};
