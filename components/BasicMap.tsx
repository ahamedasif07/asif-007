"use client";

import React from "react";
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerTooltip,
} from "@/components/ui/map";

// টাইপ ডিক্লেয়ারেশন
interface CityLocation {
  id: number;
  name: string;
  lng: number;
  lat: number;
  description: string;
}

const BangladeshMap: React.FC = () => {
  // ঢাকার মেইন লোকেশন ডেটা
  const dhakaLocation: CityLocation = {
    id: 1,
    name: "Dhaka, Bangladesh",
    lng: 90.4125, // Longitude
    lat: 23.8103, // Latitude
    description: "The capital city and the heart of Bangladesh.",
  };

  return (
    <div className="h-[500px] w-full rounded-2xl overflow-hidden border border-gray-800 bg-[#0A0A0A] shadow-2xl">
      <Map
        // center: [Longitude, Latitude] - এটি বাংলাদেশকে ম্যাপের মাঝে রাখবে
        center={[90.3563, 23.685]}
        zoom={7}
      >
        {/* ম্যাপ কন্ট্রোলস */}
        <MapControls
          position="bottom-right"
          showZoom
          showCompass
          showLocate
          showFullscreen
        />

        {/* ঢাকার ব্লু পিন (Marker) */}
        <MapMarker longitude={dhakaLocation.lng} latitude={dhakaLocation.lat}>
          <MarkerContent>
            <div className="relative flex items-center justify-center cursor-pointer">
              {/* স্থায়ী নীল গ্লো (Static Blue Glow) */}
              <div className="absolute size-8 rounded-full bg-blue-600/20 animate-pulse" />

              {/* মেইন ব্লু ডট (Solid Blue Pin) */}
              <div className="relative size-5 rounded-full bg-blue-600 border-2 border-white shadow-[0_0_15px_rgba(37,99,235,0.9)]" />

              {/* পিনের নিচের ছোট লেজ বা পয়েন্টার (Optional) */}
              <div className="absolute -bottom-1 size-2 bg-blue-600 rotate-45 border-r-2 border-b-2 border-white" />
            </div>
          </MarkerContent>

          {/* মাউস হোভার করলে দেখাবে */}
          <MarkerTooltip>Dhaka</MarkerTooltip>

          {/* ক্লিক করলে পপআপ ওপেন হবে */}
          <MarkerPopup>
            <div className="p-4 min-w-[180px] bg-white text-gray-900 rounded-xl shadow-xl">
              <h3 className="font-bold text-blue-600 text-lg leading-tight">
                {dhakaLocation.name}
              </h3>
              <p className="text-xs text-gray-500 mt-1 font-medium italic">
                {dhakaLocation.description}
              </p>

              <div className="mt-3 pt-2 border-t border-gray-100 flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">
                    Latitude
                  </span>
                  <span className="text-[11px] font-mono text-blue-500">
                    {dhakaLocation.lat.toFixed(4)}°N
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">
                    Longitude
                  </span>
                  <span className="text-[11px] font-mono text-blue-500">
                    {dhakaLocation.lng.toFixed(4)}°E
                  </span>
                </div>
              </div>

              {/* কন্টাক্ট বা ডিরেকশন বাটন চাইলে যোগ করতে পারেন */}
              <button className="w-full mt-3 py-1.5 bg-blue-600 text-white text-[10px] font-bold rounded-lg hover:bg-blue-700 transition-colors">
                VIEW ON GOOGLE MAPS
              </button>
            </div>
          </MarkerPopup>
        </MapMarker>
      </Map>
    </div>
  );
};

export default BangladeshMap;
