export type ChartItemDataType = {
  name: string;
  value: number;
  color: string;
};

export type PieChartDataType = {
  name: string;
  chartItemData: ChartItemDataType[];
  coordinates: {
    cx: number;
    cy: number;
  };
};
