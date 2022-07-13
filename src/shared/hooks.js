/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";

export const useDidUpdateEffect = (fn, inputs) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      fn();
    } else {
      didMountRef.current = true;
    }
  }, inputs);
};

export const createUseStyles = (getStyles) => {
  return (context) => {
    return React.useMemo(() => getStyles(context), Object.values(context));
  };
};
