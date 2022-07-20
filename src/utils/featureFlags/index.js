// import config from "config";

export const enableOn = (flags) => {
  // const enabledFlags = config.REACT_APP_FEATURE_FLAGS.split(",");

  // const displayFeature = flags.every((flag) => enabledFlags.includes(flag));

  // return displayFeature;

  return true;
};

export const disableOn = (flags) => !enableOn(flags);
