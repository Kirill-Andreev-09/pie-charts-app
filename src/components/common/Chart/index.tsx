import {useEffect, useRef, useState} from "react";
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

  const [size, setSize] = useState<number>(0);
  const ref = useRef<any>();

  const [increase, setIncrease] = useState<number>(0);

  const resizeHandler = () => {
    const {innerWidth} = window;
    ref.current = innerWidth;
    setSize(innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    if (size >= 1920) {
      setWidthCharts(Math.round(size * 0.8));
      setIncrease(1.9);
    } else if (size < 1920 && size > 1280) {
      setWidthCharts(Math.round(size * 0.55));
      setIncrease(1.2);
    } else if (size > 991 && size <= 1280) {
      setWidthCharts(Math.round(size * 0.8));
      setIncrease(1.1);
    } else if (size <= 991 && size > 767) {
      setWidthCharts(Math.round(size * 0.8));
      setIncrease(0.7);
    } else if (size <= 767) {
      setWidthCharts(Math.round(size));
      setIncrease(0.87);
    }
  }, [size]);

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
                cx={el.coordinates.cx * increase}
                cy={el.coordinates.cy}
                innerRadius={60 * increase}
                outerRadius={80 * increase}
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
                cx={el.coordinates.cx * increase}
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
