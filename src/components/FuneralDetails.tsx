"use client";

import LibDivider from "@/library/Divider";
import { useState } from "react";

export default function FuneralDetails() {
  const [showDetails, setShowDetails] = useState(true);

  if (!showDetails) {
    return (
      <>
        <p
          className="text-lg text-blue-700 cursor-pointer"
          onClick={() => setShowDetails(true)}
        >
          &mdash; Show Details &mdash;
        </p>
      </>
    );
  } else {
    return (
      <>
        <p
          className="text-lg text-blue-700 cursor-pointer"
          onClick={() => setShowDetails(false)}
        >
          &mdash; Hide Details &mdash;
        </p>
        <p>
          Pastor Brandon Simoneaux of Christ Our Savior Church will conduct the
          ceremony.
        </p>
        <div>
          <p className="font-bold">Visiting hours are:</p>
          <ul className="space-y-2">
            <li>10:00-11:00 AM for family</li>
            <li>11:00-1:30 PM for everyone</li>
            <li>1:30-2:00 PM chapel service</li>
          </ul>
        </div>
        <div className="pt-4 text-center">
          <p className="font-bold">Mothe Funeral Home</p>
          <p>2100 Westbank Expressway</p>
          <p>Harvey, LA 70058</p>
          <p>(504) 367-3920</p>
        </div>

        <LibDivider />

        <p>Millie will be laid to rest from 2:00-3:00 PM.</p>
        <div className="text-center">
          <p className="font-bold">Westlawn Memorial Park & Mausoleum</p>
          <p>1225 Whitney Ave</p>
          <p>Gretna, LA 70056</p>
          <p>(504) 393-1741</p>
        </div>
        <p className="py-6 italic text-xl">
          In lieu of flowers, please make a donation in the Memory of Millie
          Stire to St Jude's Children's Research Hospital.
        </p>
      </>
    );
  }
}
