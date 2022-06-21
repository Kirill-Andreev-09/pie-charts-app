import {ItemType} from "..";
import {PieChartDataType} from "../../../../types/mock-data";
import {getSum} from "../../../../utils/helpers";

type InfoContainerType = {
  chartData: PieChartDataType[];
  onItemInfoEnter: (
    fieldName: string | any,
    title: string,
    value: number
  ) => void;
  onItemInfoLeave: () => void;
  innerPieData: ItemType | null;
  currentActiveLineData: ItemType | null;
};

const InfoContainer: React.FC<InfoContainerType> = ({
  chartData,
  onItemInfoEnter,
  onItemInfoLeave,
  innerPieData,
  currentActiveLineData,
}) => {
  return (
    <div className="info">
      {chartData.map((el, index) => {
        return (
          <div className="info-item">
            <div
              onMouseEnter={(e) => {
                onItemInfoEnter(
                  (e.target as HTMLElement).innerHTML,
                  el.name,
                  getSum(el.chartItemData)
                );
              }}
              onMouseLeave={onItemInfoLeave}
              className={`info-item__description ${
                el.name === innerPieData?.title &&
                innerPieData?.fieldName === "Всего" &&
                "active"
              }`}>
              <span>Всего</span>
              <span>{getSum(el.chartItemData)}</span>
            </div>
            {el.chartItemData.map((item, index) => {
              return (
                <div
                  key={index}
                  onMouseEnter={(e) =>
                    onItemInfoEnter(item.name, el.name, item.value)
                  }
                  onMouseLeave={onItemInfoLeave}
                  className={`info-item__description ${
                    el.name === currentActiveLineData?.title &&
                    item.name === currentActiveLineData?.fieldName &&
                    "active"
                  }`}>
                  <span>{item.name}</span>
                  <span>{item.value}</span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export {InfoContainer};
