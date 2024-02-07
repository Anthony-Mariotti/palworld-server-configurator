# Palworld Server Configurator

Configure your palworld server with easy sliders, toggles, and text boxes. No more finding and searching a large configuration file just to change one setting.

> Desktop version is currently unavailable at this time. GitHub Actions needs to be configured in order to build and release the installers. Cloning, building, and running the desktop app is still fully available if you would like to test drive the desktop app.

## Developing

You will need to install [Rust](https://www.rust-lang.org/) and system dependencies. This project uses [Tauri](https://tauri.app/) to create the desktop version and is a requirement to build.

### Prerequisites

Follow [Tauri Prerequisites Guide](https://tauri.app/v1/guides/getting-started/prerequisites) to get your machine ready for development.

### Starting the project

Once you've completed the prerequisites and installed dependencies with `pnpm install`, start the development app or web server:

```bash
# starts the desktop app
pnpm tauri dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version:

```bash
# desktop app
pnpm tauri build

# or web app
pnpm run build
```

You can preview the web app production build with `pnpm run preview`.
