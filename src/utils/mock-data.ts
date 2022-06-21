import {PieChartDataType} from "../types/mock-data";

export const chartData: PieChartDataType[] = [
  {
    name: "Сценарии",
    chartItemData: [
      {name: "Активных", value: 13, color: "#e9a664"},
      {name: "Неактивных", value: 4, color: "#fad082"},
      {name: "Завершенных", value: 7, color: "#f3f1f4"},
    ],
    coordinates: {cx: 120, cy: 200},
  },

  {
    name: "Списки",
    chartItemData: [
      {name: "Активных", value: 4, color: "#f2f0f3"},
      {name: "Неактивных", value: 5, color: "#b8b1bf"},
      {name: "Завершенных", value: 3, color: "#d0cad5"},
    ],
    coordinates: {cx: 420, cy: 200},
  },

  {
    name: "Диалоги",
    chartItemData: [
      {name: "Активных", value: 5, color: "#f2f0f3"},
      {name: "Неактивных", value: 5, color: "#b8b1bf"},
      {name: "Завершенных", value: 4, color: "#d0cad5"},
    ],
    coordinates: {cx: 720, cy: 200},
  },
];
