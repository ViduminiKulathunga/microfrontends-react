import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNaviagte: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate);

  }, []);

  return <div ref={ref}></div>;
};

export default MarketingApp;
