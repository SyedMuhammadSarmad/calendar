'use client';
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar"
import React from "react";





export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    
      
    <div>
      
      <div className = "h-screen flex items-center justify-center bg-sky-300">
      <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border "
      />
      </div>
    </div>

  );
}
