"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/fetcher/icon-fetching.ts
var path = __toESM(require("path"), 1);
var import_node_util = __toESM(require("util"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_node_child_process = require("child_process");

// src/fetcher/task.ts
var Task = class {
  constructor(name, func) {
    this.name = name;
    this.func = func;
  }
  async run() {
    const startTime = performance.now();
    console.log(`Executing Task: ${this.name}`);
    await this.func();
    const endTime = performance.now();
    console.log(`Task ${this.name} completed in ${Math.floor(endTime - startTime) / 100} seconds.`);
  }
};
var task_default = Task;

// src/icon-packs.json
var icon_packs_default = [
  {
    name: "circum-icons",
    requiresFill: true,
    source: {
      url: "https://github.com/Klarr-Agency/Circum-Icons.git",
      branch: "main",
      commitHash: "a2924cb1ee37b9fa39ef023a36f1c884b3492e9b",
      iconsFolder: "svg/"
    }
  },
  {
    name: "dev-icons",
    requiresFill: true,
    source: {
      url: "https://github.com/vorillaz/devicons.git",
      branch: "master",
      commitHash: "ba75593fdf8d66496676a90cbf127d721f73e961",
      iconsFolder: "!SVG/"
    }
  },
  {
    name: "hero-icons",
    requiresFill: false,
    source: {
      url: "https://github.com/tailwindlabs/heroicons.git",
      branch: "master",
      commitHash: "1d512146c15354804be4658df5c64b02d770d243",
      iconsFolder: "optimized/"
    }
  },
  {
    name: "simple-icons",
    requiresFill: true,
    source: {
      url: "https://github.com/simple-icons/simple-icons.git",
      branch: "develop",
      commitHash: "f726999af2714f9ed69d4f60ad36aec9e089af40",
      iconsFolder: "icons/"
    }
  },
  {
    name: "box-icons",
    requiresFill: true,
    source: {
      url: "https://github.com/atisawd/boxicons.git",
      branch: "master",
      commitHash: "9ffa9136e8681886bb7bd2145cd4098717ce1c11",
      iconsFolder: "svg/regular/"
    }
  },
  {
    name: "feather-icons",
    requiresFill: false,
    source: {
      url: "https://github.com/feathericons/feather.git",
      branch: "master",
      commitHash: "f81cd40fdcdd5e94f3f97eb670a5058e3aac528d",
      iconsFolder: "icons/"
    }
  },
  {
    name: "tabler-icons",
    requiresFill: false,
    source: {
      url: "https://github.com/tabler/tabler-icons",
      branch: "master",
      commitHash: "82d4bc15d7faa21ed86c75bde80d213fc0fa2e12",
      iconsFolder: "icons/"
    }
  }
];

// src/utils/index.ts
var ICONS = icon_packs_default;

// src/fetcher/icon-fetching.ts
var execFile = import_node_util.default.promisify(import_node_child_process.execFile);
var BASE_DIR = path.join(process.cwd(), "/generated");
var cleanAndGenerateBaseFolder = async () => {
  const task = new task_default("clean-generate", async () => {
    await import_fs.default.promises.rm(BASE_DIR, {
      recursive: true,
      force: true
    });
    await import_fs.default.promises.mkdir(BASE_DIR, {
      recursive: true
    });
  });
  await task.run();
};
var downloadAndOrganizeIconPacks = async () => {
  const task = new task_default("download-organize-icons", async () => {
    for (const icon of ICONS) {
      const iconTask = new task_default(`download-${icon.name}`, async () => {
        const iconFolder = path.join(BASE_DIR, icon.name);
        console.log(`Started icon download: ${icon.source.url}/${icon.source.iconsFolder}@${icon.source.branch}`);
        await execFile("git", ["clone", "--filter=tree:0", "--no-checkout", icon.source.url, icon.name], {
          cwd: BASE_DIR
        });
        await execFile("git", ["sparse-checkout", "set", "--cone", "--skip-checks", icon.source.iconsFolder], {
          cwd: iconFolder
        });
        await execFile("git", ["checkout", icon.source.commitHash], {
          cwd: iconFolder
        });
      });
      await iconTask.run();
    }
  });
  await task.run();
};
var copyFolder = async (source, destination) => {
  const files = await import_fs.default.promises.readdir(source);
  await import_fs.default.promises.mkdir(destination, { recursive: true });
  for (const file of files) {
    const currentSource = path.join(source, file);
    const currentDestination = path.join(destination, file);
    if (import_fs.default.lstatSync(currentSource).isDirectory()) {
      await copyFolder(currentSource, currentDestination);
    } else {
      const copyFile = import_node_util.default.promisify(import_fs.default.copyFile);
      await copyFile(currentSource, currentDestination);
    }
  }
};
var parseAndPackIcons = async () => {
  const task = new task_default("parse-and-pack", async () => {
    const packFolder = path.join(process.cwd(), "/packed");
    await import_fs.default.promises.mkdir(packFolder, { recursive: true });
    const iconFolders = await import_fs.default.promises.readdir(BASE_DIR);
    for (const folder of iconFolders) {
      const iconData = ICONS.find((icon) => icon.name === folder);
      if (!iconData)
        continue;
      await copyFolder(path.join(BASE_DIR, folder, iconData.source.iconsFolder), path.join(packFolder, folder));
    }
  });
  await task.run();
};
var copyIconsToWebApp = async () => {
  const packFolder = path.join(process.cwd(), "/packed");
  const destinationFolder = path.join(process.cwd(), "../../apps/web/public/icons");
  const iconFolders = await import_fs.default.promises.readdir(packFolder);
  for (const folder of iconFolders) {
    await copyFolder(path.join(packFolder, folder), path.join(destinationFolder, folder));
  }
};
var cleanupFiles = async () => {
  const task = new task_default("cleanup-files", async () => {
    const packFolder = path.join(process.cwd(), "/packed");
    await import_fs.default.promises.rm(packFolder, { recursive: true });
    const generatedFolder = path.join(process.cwd(), "/generated");
    await import_fs.default.promises.rm(generatedFolder, { recursive: true });
  });
  await task.run();
};
var main = async () => {
  await cleanAndGenerateBaseFolder();
  await downloadAndOrganizeIconPacks();
  await parseAndPackIcons();
  await copyIconsToWebApp();
  await cleanupFiles();
};
main().catch((error) => {
  console.error("An error occurred", error);
});