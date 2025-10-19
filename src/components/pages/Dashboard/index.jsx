import React from "react";
import NavBar from "../../common/Nav/Nav";
import InformationTiles from "./Information";
import { Globe, Wallet, StickyNote, ShoppingCart } from "lucide-react";

function DashboardIndex() {
  const Tiles = [
    { title: "today's money", value: "$53,000", icon: Wallet },
    { title: "today's users", value: "2,300", icon: Globe },
    { title: "new clients", value: "+3,462", icon: StickyNote },
    { title: "total sales", value: "$103,430", icon: ShoppingCart },
  ];
  return (
    <>
      <NavBar name="Dashboard" />
      <div className="flex flex-row gap-4">
        
        {Tiles.map((tile, index) => (
          <InformationTiles
            key={index}
            Tilte={tile.title}
            Value={tile.value}
            Icon={tile.icon}
          />
        ))}
        
      </div>
    </>
  );
}

export default DashboardIndex;
