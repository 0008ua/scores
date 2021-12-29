import { useState, useCallback, useEffect } from "react";

export const useBrakepoint = () => {

  const [size, setSize] = useState(null);

  // const BRAKEPOINT = {
  //   xs: 0,
  //   sm: 600,
  //   md: 960,
  //   lg: 1280,
  //   xl: 1920,
  // };

  const createMediaString = (min, max) => {
    if (min && !max) {
      return `(min-width: ${min}px)`;
    }
    if (min && max) {
      return `(min-width: ${min}px) and (max-width: ${max}px)`;
    }
    if (!min && max) {
      return `(max-width: ${max}px)`;
    }
  }

  const createMediaBrakepoints = (BRAKEPOINTS) => {
    let brakepoints = {};
    for (let point in BRAKEPOINTS) {
      brakepoints[point] = createMediaString(...BRAKEPOINTS[point]);
    }
    return brakepoints;
  }

  const BRAKEPOINTS = {
    xs: [null, 599],
    sm: [600, 959],
    md: [960, 1279],
    lg: [1280, 1919],
    xl: [1920, null]
  };

  const MEDIABRAKEPOINTS = createMediaBrakepoints(BRAKEPOINTS);

  const checkWidth = useCallback(() => {
    for (let media in MEDIABRAKEPOINTS) {
      if (window.matchMedia(MEDIABRAKEPOINTS[media]).matches) {
        setSize(media);
      }
    }
  }, [MEDIABRAKEPOINTS])

  useEffect(() => {
    checkWidth()
  }, [checkWidth]);

  useEffect(() => {
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    }
  }, [checkWidth])

  return {
    size
  }
}