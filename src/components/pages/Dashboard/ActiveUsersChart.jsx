import { ResponsiveBar } from "@nivo/bar";

export default function ActiveUsers() {
  const data = [
    { day: "Mon", users: 200 },
    { day: "Tue", users: 300 },
    { day: "Wed", users: 450 },
    { day: "Thu", users: 250 },
    { day: "Fri", users: 350 },
    { day: "Sat", users: 150 },
    { day: "Sun", users: 400 },
  ];

  return (
    <div className=" p-4 rounded-2xl xl:h-44 h-36">
      

      <ResponsiveBar
        data={data}
        keys={["users"]}
        indexBy="day"
        margin={{ top: 10, right: 10, bottom: 10, left: 20 }}
        padding={0.7}
        layout="vertical"
        colors={["#ffffff"]}
        enableLabel={false}
        borderRadius={4}
        axisTop={null}
        axisRight={null}
        axisLeft={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 8,
          tickRotation: 0,
        }}
        theme={{
          textColor: "#94a3b8",
          grid: { line: { stroke: "#334155", strokeWidth: 1 } },
        }}
        motionConfig="gentle"
      />

      
      
    </div>
  );
}
