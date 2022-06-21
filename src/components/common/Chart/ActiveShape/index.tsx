import {Sector} from "recharts";
import {ChartItemDataType} from "../../../../types/mock-data";

type ActiveShapeType = {
  props: any;
  item: ChartItemDataType[];
  name: string;
  currentValue: number;
};

const ActiveShape: React.FC<ActiveShapeType> = ({
  props,
  item,
  name,
  currentValue,
}) => {
  const {cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill} = props;

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={-20}
        textAnchor="middle"
        fill={"black"}
        style={{fontSize: "14px", marginBottom: "20px", fontWeight: 500}}>
        {name}
      </text>
      <text
        name="sum"
        x={cx}
        y={cy}
        dy={20}
        textAnchor="middle"
        fill={"#e9a664"}
        style={{fontSize: "28px", fontWeight: 600}}>
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
