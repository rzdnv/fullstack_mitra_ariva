"use client";

import CountUp from "react-countup";
import { HIGHLIGHT_LIST } from "./constant/highlight.constant";
import { Badge } from "@/components/ui/badge";

export function RecapSection() {
  return (
    <section className="w-full px-4 lg:px-20">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {HIGHLIGHT_LIST.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-6 text-center"
          >
            {/* Label */}
            <Badge className="bg-havelock-blue-500 text-xs text-white">
              {item.label}
            </Badge>

            {/* Value */}
            <h2 className="font-DMSerif text-5xl text-slate-800 lg:text-7xl">
              <CountUp
                start={0}
                end={item.value}
                duration={2.5}
                decimals={item.value % 1 !== 0 ? 1 : 0}
              />
              {item.suffix}
            </h2>

            {/* Desc */}
            <p className="text-sm font-bold text-slate-700 lg:text-base">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
