import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "../../../theme/ThemeContext";
export default function SalesOverview() {
  const { isDark } = useTheme();
  const data = [
    {
      id: "Sales",
      color: isDark ? "#ce324a" : "#3b6aeb",
      data: [
        { x: "Jan", y: 200 },
        { x: "Feb", y: 250 },
        { x: "Mar", y: 400 },
        { x: "Apr", y: 300 },
        { x: "May", y: 500 },
        { x: "Jun", y: 350 },
        { x: "Jul", y: 420 },
        { x: "Aug", y: 320 },
        { x: "Sep", y: 380 },
        { x: "Oct", y: 470 },
        { x: "Nov", y: 410 },
        { x: "Dec", y: 500 },
      ],
    },
  ];

  const lineColor = isDark ? "#ce324a" : "#2563eb";
  const gradientTop = isDark ? "#38bdf8" : "#60a5fa";
  const gradientBottom = isDark ? "#1e293b" : "#dbeafe";
  const gridColor = isDark ? "#334155" : "#cbd5e1";
  const textColor = isDark ? "#94a3b8" : "#475569";

  return (
    <div className="p-4 rounded-2xl w-full h-80">
      
      <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 20, bottom: 40, left: 20 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", min: 100, max: 600, stacked: true }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 10,
        }}
        axisLeft={null}
        enableGridX={false}
        enableGridY={true}
        enablePoints={false}
        lineWidth={3}
        colors={[lineColor]}
        areaOpacity={0.25}
        enableArea={true}
        defs={[
          {
            id: "gradientA",
            type: "linearGradient",
            colors: [
              { offset: 0, color: gradientTop, opacity: 0.6 },
              { offset: 100, color: gradientBottom, opacity: 0.1 },
            ],
          },
        ]}
        fill={[{ match: "*", id: "gradientA" }]}
        motionConfig="gentle"
        theme={{
          textColor: textColor,
          stroke: gridColor,
          grid: { line: { stroke: "#334155", strokeWidth: 1 } },
        }}
      />
    </div>
  );
}
