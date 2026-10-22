import cyberspacePdf from "../assets/certs/cyberspace-fundamentals.pdf";
import cyberspacePreview from "../assets/certs/cyberspace-fundamentals.jpg";

// Newest first. Shape: { id, title, issuer, location, date, hours, description, skills, file, preview }
export const certs = [
  {
    id: "cyberspace-fundamentals",
    title: "Cyberspace Fundamentals",
    issuer: "U.S. Air Force",
    location: "Keesler AFB, MS",
    date: "Oct 2026",
    hours: 296,
    description:
      "296-hour Air Force technical training course covering networking, client systems, switching and routing, server administration, and cyber security. Finished with a hands-on capstone where I built an enterprise network end to end: Juniper routing and firewall zones, switch VLANs, and a Windows Server domain running Active Directory and DHCP.",
    skills: ["Networking", "Switching & Routing", "Juniper", "VLANs", "Windows Server", "Active Directory", "DHCP", "Cyber Security"],
    file: cyberspacePdf,
    preview: cyberspacePreview,
  },
];
