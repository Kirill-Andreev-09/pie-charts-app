import {Sector} from "recharts";
import {ChartItemDataType} from "../../../../types/mock-data";

type ActiveShapeType = {
  props: any;
  item: ChartItemDataType[];
  name: string;
  currentValue: number;
  increase: number;
};

const ActiveShape: React.FC<ActiveShapeType> = ({
  props,
  item,
  name,
  currentValue,
  increase,
}) => {
  const {cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill} = props;

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={-10 * increase * 2}
        textAnchor="middle"
        fill={"black"}
        style={{fontSize: `${15 * increase}px`, fontWeight: 500}}>
        {name}
      </text>
      <text
        name="sum"
        x={cx}
        y={cy}
        dy={15 * increase * 2}
        textAnchor="middle"
        fill={"#e9a664"}
        style={{fontSize: `${40 * increase}px`, fontWeight: 600}}>
        {currentValue}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

export {ActiveShape};
