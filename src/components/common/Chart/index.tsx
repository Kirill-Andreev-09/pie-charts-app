import {useEffect, useState} from "react";
import {Cell, Pie, PieChart} from "recharts";
import {chartData} from "../../../utils/mock-data";
import "./Chart.scss";
import {ActiveShape} from "./ActiveShape";
import {getSum} from "../../../utils/helpers";
import {InfoContainer} from "./InfoContainer";

export type ItemType = {
  fieldName: string;
  title: string;
  value: number;
};

const Chart: React.FC = () => {
  const [widthCharts, setWidthCharts] = useState(0);
  const [currentActiveLineData, setCurrentActiveLineData] =
    useState<ItemType | null>(null);
  const [itemInfoName, setItemInfoName] = useState<ItemType | null>(null);
  const [innerPieData, setInnerPieData] = useState<ItemType | null>(null);

  useEffect(() => {
    let width = 0;
    width = window.innerWidth > 0 ? window.innerWidth : window.screen.width;
    setWidthCharts(Math.round(width * 0.92));
  }, []);

  const onPieEnter = (title: string, values: any): void => {
    const {name, value} = values;

    setCurrentActiveLineData({fieldName: name, title, value});
  };

  const onPieLeave = () => {
    setCurrentActiveLineData(null);
  };

  const onItemInfoEnter = (
    fieldName: string | any,
    title: string,
    value: number
  ) => {
    console.log();

    setItemInfoName({fieldName, title, value});
  };

  const onItemInfoLeave = () => {
    setItemInfoName(null);
  };

  const onInnerPieEnter = (title: string, values: any) => {
    const {name, value} = values;
    setInnerPieData({fieldName: name, title, value});
  };

  const onInnerPieLeave = () => {
    setInnerPieData(null);
  };

  const data01 = [{name: "Всего", value: 1, sum: 0}];

  return (
    <div>
      <PieChart width={widthCharts} height={400}>
        {chartData.map((el, index) => {
          return (
            <>
              <Pie
                key={index}
                onMouseEnter={(values) => onPieEnter(el.name, values)}
                onMouseLeave={onPieLeave}
                cx={el.coordinates.cx}
                cy={el.coordinates.cy}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                data={el.chartItemData}>
                {el.chartItemData.map((item, index) => {
                  return (
                    <Cell
                      key={`cell-${index}`}
                      strokeWidth={
                        (itemInfoName?.title === el.name &&
                          itemInfoName?.fieldName === item.name) ||
                        (itemInfoName?.title === el.name &&
                          itemInfoName?.fieldName === "Всего")
                          ? 2
                          : ""
                      }
                      stroke={
                        (itemInfoName?.title === el.name &&
                          itemInfoName?.fieldName === item.name) ||
                        (itemInfoName?.title === el.name &&
                          itemInfoName?.fieldName === "Всего")
                          ? "black"
                          : ""
                      }
                      fill={item.color}
                    />
                  );
                })}
              </Pie>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx={el.coordinates.cx}
                cy={el.coordinates.cy}
                outerRadius={50}
                fill="transparent"
                onMouseEnter={(values) => onInnerPieEnter(el.name, values)}
                onMouseLeave={onInnerPieLeave}
                activeIndex={0}
                activeShape={(props) => (
                  <ActiveShape
                    props={props}
                    item={el.chartItemData}
                    name={el.name}
                    currentValue={
                      itemInfoName?.title === el.name
                        ? itemInfoName?.value
                        : currentActiveLineData?.title === el.name
                        ? currentActiveLineData?.value
                        : getSum(el.chartItemData)
                    }
                  />
                )}
              />
            </>
          );
        })}
      </PieChart>

      <InfoContainer
        chartData={chartData}
        onItemInfoEnter={onItemInfoEnter}
        onItemInfoLeave={onItemInfoLeave}
        innerPieData={innerPieData}
        currentActiveLineData={currentActiveLineData}
      />
    </div>
  );
};

export {Chart};
