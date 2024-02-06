# Palworld Server Configurator

Configure your palworld server with easy sliders, toggles, and text boxes. No more finding and searching a large configuration file just to change one setting.

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
