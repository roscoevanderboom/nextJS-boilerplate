const browser = process.browser;

const getDevice = () => ({
  platform: browser && window.platform.os.family,
  browser: browser && window.platform.name,
  arch: browser && window.platform.os.architecture,
  orientation: browser && window.screen.orientation.type,
  iOSMobile: browser && /iPad|iPhone|iPod/.test(navigator.userAgent),
  android: browser && /Android/.test(navigator.userAgent),
});

export default getDevice;
