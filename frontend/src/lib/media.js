// Eagerly globs every photo under src/assets/military and src/assets/travel.
// Adding a new photo to an existing folder, or a whole new folder, needs no
// code change — imagesForFolder() picks it up automatically at build time.
const militaryImages = import.meta.glob(
  "/src/assets/military/**/*.{jpg,jpeg,JPG,JPEG,png,PNG}",
  { eager: true, import: "default" }
);

const travelImages = import.meta.glob(
  "/src/assets/travel/**/*.{jpg,jpeg,JPG,JPEG,png,PNG}",
  { eager: true, import: "default" }
);

function imagesForFolder(map, folderName) {
  return Object.keys(map)
    .filter((path) => path.includes(`/${folderName}/`))
    .sort()
    .map((path) => map[path]);
}

export function militaryFolder(folderName) {
  return imagesForFolder(militaryImages, folderName);
}

export function travelFolder(folderName) {
  return imagesForFolder(travelImages, folderName);
}
