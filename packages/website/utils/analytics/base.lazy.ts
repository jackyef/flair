interface AnalyticsModule {
  init: () => void;
  // eslint-disable-next-line
  gaAll: Function;
}

let analyticsModule: AnalyticsModule;

export const baseAnalytics = async () => {
  if (!analyticsModule) {
    analyticsModule = await import(
      /* webpackChunkName: "analytics" */ './base.js'
    );
  }

  return analyticsModule;
};
