var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/button/button.tsx
import clsx from "clsx";
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var colorSchemesStyles = {
  primary: {
    outline: "border-4 border-primary-300 dark:border-primary-600 hover:bg-primary-300 hover:text-primary-800 focus:ring-primary-300 dark:text-primary-200  dark:hover:bg-primary-600 dark:focus:ring-primary-500",
    solid: "bg-primary-200 text-primary-800 hover:bg-primary-300 focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-900 dark:text-primary-200"
  },
  red: {
    outline: "border-4 border-red-300 dark:border-red-600 hover:bg-red-300 hover:text-red-800 focus:ring-red-300 dark:text-red-200  dark:hover:bg-red-600 dark:focus:ring-red-500",
    solid: "bg-red-200 text-red-800 hover:bg-red-300 focus:ring-red-300 dark:bg-red-700 dark:hover:bg-red-900 dark:text-red-200"
  },
  orange: {
    outline: "border-4 border-orange-300 dark:border-orange-600 hover:bg-orange-300 hover:text-orange-800 focus:ring-orange-300 dark:text-orange-200 dark:hover:bg-orange-600 dark:focus:ring-orange-500",
    solid: "bg-orange-200 text-orange-800 hover:bg-orange-300 focus:ring-orange-300 dark:bg-orange-700 dark:hover:bg-orange-900 dark:text-orange-200"
  },
  yellow: {
    outline: "border-4 border-yellow-300 dark:border-yellow-600 hover:bg-yellow-300 hover:text-yellow-800 focus:ring-yellow-300 dark:text-yellow-200  dark:hover:bg-yellow-600 dark:focus:ring-yellow-500",
    solid: "bg-yellow-200 text-yellow-800 hover:bg-yellow-300 focus:ring-yellow-300 dark:bg-yellow-700 dark:hover:bg-yellow-900 dark:text-yellow-200"
  },
  green: {
    outline: "border-4 border-green-300 dark:border-green-600 hover:bg-green-300 hover:text-green-800 focus:ring-green-300 dark:text-green-200  dark:hover:bg-green-600 dark:focus:ring-green-500",
    solid: "bg-green-200 text-green-800 hover:bg-green-300 focus:ring-green-300 dark:bg-green-700 dark:hover:bg-green-900 dark:text-green-200"
  },
  blue: {
    outline: "border-4 border-blue-300 dark:border-blue-600 hover:bg-blue-300 hover:text-blue-800 focus:ring-blue-300 dark:text-blue-200  dark:hover:bg-blue-600 dark:focus:ring-blue-500",
    solid: "bg-blue-200 text-blue-800 hover:bg-blue-300 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-900 dark:text-blue-200"
  },
  indigo: {
    outline: "border-4 border-indigo-300 dark:border-indigo-600 hover:bg-indigo-300 hover:text-indigo-800 focus:ring-indigo-300 dark:text-indigo-200 dark:hover:bg-indigo-600 dark:focus:ring-indigo-500",
    solid: "bg-indigo-200 text-indigo-800 hover:bg-indigo-300 focus:ring-indigo-300 dark:bg-indigo-700 dark:hover:bg-indigo-900 dark:text-indigo-200"
  },
  purple: {
    outline: "border-4 border-purple-300 dark:border-purple-600 hover:bg-purple-300 hover:text-purple-800 focus:ring-purple-300 dark:text-purple-200  dark:hover:bg-purple-600 dark:focus:ring-purple-500",
    solid: "bg-purple-200 text-purple-800 hover:bg-purple-300 focus:ring-purple-300 dark:bg-purple-700 dark:hover:bg-purple-900 dark:text-purple-200"
  },
  teal: {
    outline: "border-4 border-teal-300 dark:border-teal-600 hover:bg-teal-300 hover:text-teal-800 focus:ring-teal-300 dark:text-teal-200  dark:hover:bg-teal-600 dark:focus:ring-teal-500",
    solid: "bg-teal-200 text-teal-800 hover:bg-teal-300 focus:ring-teal-300 dark:bg-teal-700 dark:hover:bg-teal-900 dark:text-teal-200"
  },
  pink: {
    outline: "border-4 border-pink-300 dark:border-pink-600 hover:bg-pink-300 hover:text-pink-800 focus:ring-pink-300 dark:text-pink-200  dark:hover:bg-pink-600 dark:focus:ring-pink-500",
    solid: "bg-pink-200 text-pink-800 hover:bg-pink-300 focus:ring-pink-300 dark:bg-primary-700 dark:hover:bg-pink-900 dark:text-pink-200"
  }
};
var Button = React.forwardRef((props, ref) => {
  const _a = props, { children, leftIcon, rightIcon, colorScheme = "primary", size = "md", variant = "solid" } = _a, rest = __objRest(_a, ["children", "leftIcon", "rightIcon", "colorScheme", "size", "variant"]);
  const getButtonSizes = () => {
    switch (size) {
      case "sm":
        return "py-2.5 px-3 text-base";
      case "md":
        return "px-5 py-2.5 text-md";
      case "lg":
        return "px-10 py-3.5 text-lg";
      default:
        return "py-3 px-2.5 text-base";
    }
  };
  const getButtonVariants = () => {
    return variant === "solid" ? colorSchemesStyles[colorScheme].solid : colorSchemesStyles[colorScheme].outline;
  };
  const _b = rest, { className } = _b, excludedRest = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxs(
    "button",
    __spreadProps(__spreadValues({
      ref,
      type: "button",
      className: clsx(
        `inline-flex items-center justify-center rounded-lg text-base font-semibold transition-all focus:outline-none focus:ring-4`,
        getButtonSizes(),
        getButtonVariants(),
        rest.className
      )
    }, excludedRest), {
      children: [
        leftIcon && /* @__PURE__ */ jsx("div", { className: "inline-flex shrink-0 self-center pr-1", children: leftIcon }),
        children,
        rightIcon && /* @__PURE__ */ jsx("div", { className: "inline-flex shrink-0 self-center pl-1", children: rightIcon })
      ]
    })
  );
});
Button.displayName = "Button";
export {
  Button
};
