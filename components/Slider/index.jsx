"use client";
import { Splide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React from "react";

const initalOptions = {
  rewind: false,
  pagination: false,
  autoplay: false,
  arrows: true,
  pauseOnHover: true,
  speed: 500,
  interval: 3000,
  lazyLoad: true,
};
export default function Slider({
  children,
  options = initalOptions,
  className,
  position,
  ref,
}) {
  return (
    <Splide
      hasTrack={false}
      options={{ ...initalOptions, ...options }}
      ref={ref}
      className={className}
    >
      <SplideTrack>{children}</SplideTrack>
      <ul className={`splide__pagination ${position}`}></ul>
    </Splide>
  );
}
