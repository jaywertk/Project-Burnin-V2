# Project Burnin

A fast, dark, modern Minecraft Java launcher for Windows, macOS and Linux (Electron + React + Vite).

Project Burnin is a fork of [OpenLauncher](https://github.com/CesarGarza55/OpenLauncher) by CesarGarza55 and stays under the
**GPL-2.0** license (see `LICENSE` and `NOTICE.md`). Not affiliated with Mojang, Microsoft or Lunar Client.

## Get an installer without installing anything
1. Put this project in a GitHub repo (the `.github` folder must be included).
2. **Actions** tab > **Build Project Burnin** > **Run workflow**.
3. When it finishes, download the artifacts: Windows `ProjectBurnin-Portable-Windows.exe` (just run it), Linux `.deb` / `.tar.gz`, macOS `.dmg` / `.zip` (Apple Silicon).

## Run from source
```bash
npm install
npm run dev
```

## Microsoft sign-in
The code still ships OpenLauncher's public default Azure client ID so sign-in works out of the box. For your own releases,
register your own app (public client, redirect `http://localhost:8080/callback`) and set `MICROSOFT_CLIENT_ID`
(see `.env.example`). Mojang also requires approval for third-party launchers: https://aka.ms/AppRegInfo

## Roadmap
See the milestone plan in the project discussion: performance tools, CurseForge, skins, servers, screenshots, crash analyzer, themes.
