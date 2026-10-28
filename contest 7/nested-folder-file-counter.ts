interface FileItem {
  name: string;
  type: "file";
}

interface FolderItem {
  name: string;
  type: "folder";
  children: FolderEntry[];
}

type FolderEntry = FileItem | FolderItem;

function countFilesInFolder(structure: FolderEntry[]): number {
  let count = 0;

  for (const entry of structure) {
    if (entry.type === "file") {
      count++;
    } else if (entry.type === "folder") {
      count += countFilesInFolder(entry.children);
    }
  }

  return count;
}

// ---------------------------------------------------------------
// LOCAL TESTING (ei part ta submit korar dorkar nai)
// ---------------------------------------------------------------

const structure1: FolderEntry[] = [
  { name: "document.txt", type: "file" },
  { name: "images", type: "folder", children: [
    { name: "photo1.jpg", type: "file" },
    { name: "photo2.png", type: "file" },
  ]},
  { name: "report.pdf", type: "file" },
];

const structure2: FolderEntry[] = [
  { name: "src", type: "folder", children: [
    { name: "index.js", type: "file" },
    { name: "components", type: "folder", children: [
      { name: "Button.js", type: "file" },
      { name: "Header.js", type: "file" },
    ]},
  ]},
  { name: "package.json", type: "file" },
  { name: "empty_folder", type: "folder", children: [] },
];

console.log(countFilesInFolder(structure1));
console.log(countFilesInFolder(structure2));
console.log(countFilesInFolder([]));
console.log(countFilesInFolder([{ name: "a", type: "folder", children: [] }]));