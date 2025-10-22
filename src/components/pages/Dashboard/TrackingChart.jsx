import { ResponsivePie } from "@nivo/pie";
import { useTheme } from "../../../theme/ThemeContext";

export default function SafetyScore() {
  const value = 9.3;
  const { isDark } = useTheme();

  const scoreColor = isDark ? "#ce324a" : "#3b6aeb"; 
  const remainingColor = isDark ? "#ffffff" : "#444444";

  const data = [
    { id: "score", value: value, color: scoreColor  },
    { id: "remaining", value: 10 - value, color: remainingColor },
  ];

  return (
    <div className="relative h-48 w-full flex items-center justify-center">
      <div className="w-full h-full"> 
        <ResponsivePie
          data={data}
          innerRadius={0.75}
          padAngle={2}
          cornerRadius={8}
          colors={{ datum: "data.color" }}
          enableArcLabels={false}
          enableArcLinkLabels={false}
          startAngle={0}
          endAngle={360}
          sortByValue={false}
          motionConfig="gentle"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <p className={`text-3xl font-bold  ${isDark ? "text-white" : "text-black"}`}>{value}</p>
        <p className={`text-sm  ${isDark ? "text-gray-400" : "text-gray-600"}`}>Total Score</p>
      </div>
    </div>
  );
}