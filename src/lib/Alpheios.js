// eslint-disable-next-line no-undef
const w = window;

const activate = () => {
  if (w && w.navigator && w.navigator.userAgent !== 'ReactSnap') {
    if (!w.alpheiosInstance) {
      w.alpheiosInstance = new w.Alpheios.Embedded({
        clientId: process.env.REACT_APP_ALPHEIOS_KEY,
        enabledSelector: '[lang=grc], [lang=lat]',
      });
    }

    w.alpheiosInstance.activate();
  }
};

export {
  // eslint-disable-next-line import/prefer-default-export
  activate,
};
