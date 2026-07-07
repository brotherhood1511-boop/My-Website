import { travelFolder } from "../lib/media.js";

export const travelEntries = [
  {
    id: "shenandoah-va",
    location: "Shenandoah, VA",
    dates: ["2019-07-31"],
    note: "A weekend away with Hunter and Brendon to relax and unplug — no cell phones — before leaving for Basic Training.",
    images: travelFolder("Shandoah VA 07312019"),
  },
  {
    id: "seattle",
    location: "Seattle, WA",
    dates: ["2023-05-12 – 2023-05-16", "2023-12-15 – 2023-12-18", "2024-05-13 – 2024-06-03"],
    note: "Visiting Hunter and taking a vacation.",
    images: travelFolder("Seattle"),
  },
  {
    id: "munich",
    location: "Munich, Germany",
    dates: ["2022-09-16 – 2022-09-25"],
    note: "Flew into Amsterdam, took a bus down to Munich for Oktoberfest, then a train back to Amsterdam to fly home.",
    images: travelFolder("Munich Germany"),
  },
  {
    id: "italy",
    location: "Italy",
    dates: ["2024-11-12 – 2024-11-21"],
    note: "25th birthday trip. Flew into Amsterdam on Nov 12, then on to Italy Nov 14. Flew back through Amsterdam Nov 20 and home Nov 21.",
    images: travelFolder("Italy"),
  },
];
