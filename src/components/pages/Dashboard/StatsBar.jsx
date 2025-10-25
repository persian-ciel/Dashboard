import { User, MousePointer, ShoppingCart, Wrench } from "lucide-react";
import { useTheme } from "../../../theme/ThemeContext";

export default function StatsBar() {
  const { isDark } = useTheme();
  const stats = [
    {
      id: 1,
      title: "Users",
      value: "32,984",
      icon: <User size={15} className="text-white" />,
      progress: 80,
    },
    {
      id: 2,
      title: "Clicks",
      value: "2.42M",
      icon: <MousePointer size={15} className="text-white" />,
      progress: 70,
    },
    {
      id: 3,
      title: "Sales",
      value: "2,400$",
      icon: <ShoppingCart size={15} className="text-white" />,
      progress: 65,
    },
    {
      id: 4,
      title: "Items",
      value: "320",
      icon: <Wrench size={15} className="text-white" />,
      progress: 50,
    },
  ];

  return (
    <div className="flex justify-evenly gap-5 mt-6 flex-wrap ">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex flex-col flex-1  bg-transparent mx-1 "
        >
          <div className="flex items-center gap-2 mb-1 ">
            <div className={`${isDark ? "bg-[#ce324a]" : "bg-[#3b6aeb]"} p-2  rounded-lg flex items-center justify-center`}>
              {stat.icon}
            </div>
            <span className={` ${isDark ? "text-white" : "text-black"} text-sm`}>{stat.title}</span>
          </div>
          <span className={`${isDark ? "text-white" : "text-black"} font-bold text-lg`}>{stat.value}</span>
          <div className="w-full h-1 mt-1 bg-blue-950 rounded-full overflow-hidden">
            <div
              className={`h-1 ${isDark ? "bg-[#ce324a]" : "bg-[#3b6aeb]"}  rounded-full transition-all duration-700`}
              style={{ width: `${stat.progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
