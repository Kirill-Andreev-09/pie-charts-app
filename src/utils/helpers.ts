import {ChartItemDataType} from "../types/mock-data";

export const getSum = (data: ChartItemDataType[]): number => {
  return data
    .map((el: ChartItemDataType) => el.value)
    .reduce(function (a: number, b: number) {
      return a + b;
    });
};
