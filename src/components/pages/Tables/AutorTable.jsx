import React from "react";
import { useTheme } from "../../../theme/ThemeContext";
import Authors from "./Authors";

function AuthorTable() {
  const { isDark } = useTheme();
  const emplyeInfo = [
    {
      name: "Esthera Jackson",
      email: "esthera@simmmple.com",
      jobTitle: "Manager",
      job: "Organization",
      state: "online",
      date: "23/04/18",
      ImageSource: "/avatar4.webp",
    },
    {
      name: "Alexa Liras",
      email: "alexa@simmmple.com",
      jobTitle: "Programator",
      job: "Developer",
      state: "Offline",
      date: "11/01/19",
      ImageSource: "avatar2.webp",
    },
    {
      name: "Laurent Michael",
      email: "laurent@simmmple.com",
      jobTitle: "Executive",
      job: "Projects",
      state: "Online",
      date: "19/09/17",
      ImageSource: "avatar3.webp",
    },
    {
      name: "Freduardo Hill",
      email: "freduardo@simmmple.com",
      jobTitle: "Programato",
      job: "Developer",
      state: "online",
      date: "24/12/08",
      ImageSource: "/avatar1.webp",
    },
    {
      name: "Daniel Thomas",
      email: "daniel@simmmple.com",
      jobTitle: "Manager",
      job: "Executive",
      state: "Offline",
      date: "04/10/21",
      ImageSource: "avatar5.webp",
    },
    {
      name: "Mark Wilson",
      email: "mark@simmmple.com",
      jobTitle: "Programtor",
      job: "Developer",
      state: "Offline",
      date: "14/09/20",
      ImageSource: "avatar6.webp",
    },
  ];
  return (
    <>
      <div className="w-full overflow-x-auto">
        <div
          className={`min-w-[800px] sm:min-w-[600px] flex text-sm border-b-2 border-gray-400 pb-2 ${
            isDark ? "text-gray-300" : "text-gray-500"
          } `}
        >
          <div className="w-4/12">AUTHOR</div>
          <div className="w-3/12">FUNCTION</div>
          <div className="w-3/12">STATUS</div>
          <div className="w-3/12">EMPLOYED</div>
        </div>
        {emplyeInfo.map((item) => (
          <Authors
            name={item.name}
            email={item.email}
            jobTitle={item.jobTitle}
            job={item.job}
            state={item.state}
            date={item.date}
            ImageSource={item.ImageSource}
          />
        ))}
      </div>
    </>
  );
}

export default AuthorTable;
