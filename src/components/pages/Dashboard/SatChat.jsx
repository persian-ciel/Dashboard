import { ResponsivePie } from "@nivo/pie";


export default function GaugeChart() {
  const value = 95;
  

  const data = [
    {
      id: "completed",
      value: value,
      color: "#3b82f6",
    },
    {
      id: "remaining",
      value: 100 - value,
      color: "#1e293b",
    },
  ];

  return (
    <div className="w-full h-64 flex flex-col items-center justify-center relative">
      <div className="w-full h-36 pt-3">
        {" "}
        {/* تنظیم ارتفاع برای چارت */}
        <ResponsivePie
          data={data}
          innerRadius={0.8}
          padAngle={1}
          cornerRadius={45}
          colors={{ datum: "data.color" }}
          enableArcLabels={false}
          enableArcLinkLabels={false}
          startAngle={0}
          endAngle={360}
          sortByValue={false}
          motionConfig="gentle"
        />
      </div>
      <div className="w-full h-16 text-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl z-50 -mt-10 justify-between flex items-center px-5">
        <div>0%</div>
        <div>
          <p className="text-3xl font-bold text-white">{value}%</p>
          <p className="text-sm text-gray-300 mt-1">Based on likes</p>
        </div>
        <div>100%</div>
      </div>
    </div>
  );
}
