import achievementMedal from "../assets/military/medals/air-and-space-achievement-medal.svg";
import meritoriousUnit from "../assets/military/medals/meritorious-unit-award.svg";
import outstandingUnit from "../assets/military/medals/outstanding-unit-award.svg";
import nationalDefense from "../assets/military/medals/national-defense-service-medal.svg";
import inherentResolve from "../assets/military/medals/inherent-resolve-campaign-medal.svg";
import gwotExpeditionary from "../assets/military/medals/gwot-expeditionary-medal.svg";
import gwotService from "../assets/military/medals/gwot-service-medal.svg";
import armedForcesService from "../assets/military/medals/armed-forces-service-medal.svg";
import expeditionaryServiceGold from "../assets/military/medals/air-space-expeditionary-service-ribbon-gold.png";
import humanitarianService from "../assets/military/medals/humanitarian-service-medal.svg";
import armedForcesReserve from "../assets/military/medals/armed-forces-reserve-medal.svg";
import trainingRibbon from "../assets/military/medals/air-space-training-ribbon.svg";
import dcngInauguration from "../assets/military/medals/dcng-presidential-inauguration-support-ribbon.png";

// Ribbon images are official U.S. government (public domain) graphics via Wikimedia Commons.
export const medals = [
  {
    id: "achievement-medal",
    title: "Air and Space Achievement Medal",
    device: "2 Oak Leaf Clusters",
    image: achievementMedal,
  },
  {
    id: "meritorious-unit-award",
    title: "Meritorious Unit Award",
    image: meritoriousUnit,
  },
  {
    id: "outstanding-unit-award",
    title: "Air and Space Outstanding Unit Award",
    image: outstandingUnit,
  },
  {
    id: "national-defense-service-medal",
    title: "National Defense Service Medal",
    image: nationalDefense,
  },
  {
    id: "inherent-resolve-campaign-medal",
    title: "Inherent Resolve Campaign Medal",
    device: "1 Service Star",
    image: inherentResolve,
  },
  {
    id: "gwot-expeditionary-medal",
    title: "Global War on Terrorism Expeditionary Medal",
    device: "1 Service Star",
    image: gwotExpeditionary,
  },
  {
    id: "gwot-service-medal",
    title: "Global War on Terrorism Service Medal",
    image: gwotService,
  },
  {
    id: "armed-forces-service-medal",
    title: "Armed Forces Service Medal",
    image: armedForcesService,
  },
  {
    id: "expeditionary-service-ribbon",
    title: "Air and Space Expeditionary Service Ribbon",
    device: "Gold Border, 1 Oak Leaf Cluster",
    image: expeditionaryServiceGold,
  },
  {
    id: "humanitarian-service-medal",
    title: "Humanitarian Service Medal",
    image: humanitarianService,
  },
  {
    id: "armed-forces-reserve-medal",
    title: "Armed Forces Reserve Medal",
    device: '1 "M" Device',
    image: armedForcesReserve,
  },
  {
    id: "training-ribbon",
    title: "Air and Space Training Ribbon",
    image: trainingRibbon,
  },
  {
    id: "dcng-inauguration-support-ribbon",
    title: "DCNG Presidential Inauguration Support Ribbon",
    device: "State Award — D.C. National Guard",
    image: dcngInauguration,
  },
];
