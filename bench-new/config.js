const BENCHMARK_CONFIG = {
  // TODO: echart, uplot
  // "lcjs" | "scichart" | "plotly" | "amchart" | "anychart" | "highchart" | "zingchart" | "dvxchart" | "dygraph"
  library: "dygraph",
  // "static" | "append" | "refresh"
  mode: "refresh",
  // In "static" or "refresh" mode, amount of data points per channel.
  channelDataPointsCount: 10000,
  channelsCount: 1,
  ticksEnabled: false,
  dataSource: 'data.json',
  strokeThickness: 1,
  // Max amount of data points to append in a single frame (total of all channels).
  maxChunkDataPoints: 1000000,
  // In "append" mode, interval of x axis as seconds.
  appendTimeDomainIntervalSeconds: 15,
  // In "append" mode, amount of samples pushed every second.
  appendNewSamplesPerSecond: 1000,
  // In "append" mode, the data that matches this many seconds is first appended into the chart to simulate as if the application had run for a long time.
  appendHistorySeconds: 120, 
  // In "refresh" mode, amount of refreshes every second.
  refreshRate: 10,
};
