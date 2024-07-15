declare global {
  // eslint-disable-next-line no-var
  var sigtermReceived: boolean | undefined;
}

globalThis.sigtermReceived = globalThis.sigtermReceived ?? false;

export const setSigtermReceived = () => {
  console.log("Set sigterm received to true");
  globalThis.sigtermReceived = true;
};

export const isSigtermReceived = () => {
  const returnValue = globalThis.sigtermReceived;

  console.log("isSigtermReceived", returnValue);
  return returnValue;
};

export const a = () => globalThis.sigtermReceived;
