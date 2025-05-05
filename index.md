# Syndeos

A powerful desktop application for managing VPS servers across various cloud platforms.

## About

Syndeos helps you manage your servers from Digital Ocean, Linode, AWS, and more - all from one simple interface. It's completely free and open-source under the [GNU GPL3 license](https://www.gnu.org/licenses/gpl-3.0.en.html).

## Key Features

- Works on Windows, macOS, and Linux
- Connect to multiple cloud providers
- Manage all your servers from a single dashboard
- Secure SSH key management
- Real-time server monitoring
- Database management tools
- User administration
- Web server configuration tools
- PHP version management
- Backup scheduling and management

## Built With

- **Tauri v2** - Cross-platform desktop application framework
- **Rust** - For backend functionality
- **React v19** - For the user interface
- **Tailwind CSS v4** - For styling
- **Shadcn/UI** - For UI components
- **TypeScript** - For type safety
- **Bun** - For JavaScript runtime and package management

## MVC Architecture

Syndeos follows the Model-View-Controller pattern:

- **Model**: Rust backend services for server interactions
- **View**: React components for the user interface
- **Controller**: Tauri commands connecting frontend and backend

## Getting Started

### Requirements

- Bun.js v1.2 or later
- Rust (latest stable)
- Platform-specific Tauri dependencies

### Installation

```
git clone https://github.com/righteouswaters/syndeos.git
cd syndeos
bun install
bun run tauri build
```

For development, use `bun run tauri dev`.

## Why Open Source?

- Community contributions
- Transparency
- Customization options
- Knowledge sharing

## Join Us

We welcome contributions from developers of all skill levels!

- [Contribution Guidelines](https://github.com/righteouswaters/syndeos/blob/main/CONTRIBUTING.md)
- [Report Issues](https://github.com/righteouswaters/syndeos/issues)
- [Discussions](https://github.com/righteouswaters/syndeos/discussions)

## Download

[Download Syndeos](https://github.com/righteouswaters/syndeos/releases) or [View on GitHub](https://github.com/righteouswaters/syndeos)

---

© 2025 Righteous Waters | Licensed under [GNU GPL3](https://www.gnu.org/licenses/gpl-3.0.en.html)
