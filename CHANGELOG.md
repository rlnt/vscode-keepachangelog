# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog],
and this project adheres to [Semantic Versioning].

## [1.3.0] - 2023-06-09

### Changed

- a lot of internal refactoring

### Fixed

- snippets do not remove the prefix ([#9])

### Security

- updated dependencies and VSCode engine

<!-- Links -->
[#9]: https://github.com/DAmNRelentless/vscode-keepachangelog/issues/9

## [1.2.2] - 2022-07-29

### Changed

- renamed the master branch to main

### Fixed

- snippets not passing lint tests ([#5])

### Security

- updated dependencies

<!-- Links -->
[#5]: https://github.com/DAmNRelentless/vscode-keepachangelog/pull/5

## [1.2.1] - 2021-08-17

### Fixed

- single entries upper-casing [@egfx-notifications] ([#4])

### Security

- updated dependencies

<!-- Links -->
[@egfx-notifications]: https://github.com/egfx-notifications
[#4]: https://github.com/DAmNRelentless/vscode-keepachangelog/pull/4

## [1.2.0] - 2021-07-30

### Added

- default author extension setting
- default repository extension setting

### Changed

- options no longer hot-reload to save performance
  - this means you have to reload the window or restart VSCode when editing a setting
- moved date formatter outside of completion provider

## [1.1.2] - 2021-07-30

### Fixed

- extension not able to start

## [1.1.1] - 2021-07-30

### Fixed

- preview gif not being shown

## [1.1.0] - 2021-07-30

- initial release of the rewrite

## [1.0.6] - 2020-02-22

### Removed

- .github directory from extension

## [1.0.5] - 2020-02-20

### Fixed

- icon not appearing on extension

## [1.0.4] - 2020-02-20

### Changed

- link to 'Unreleased' to fit Keep a Changelog ruleset

## [1.0.3] - 2020-02-18

### Changed

- links to references
- cursor positioning for version tags

## [1.0.2] - 2020-02-18

### Changed

- changelog format to new snippets
- initial release redirect

## [1.0.1] - 2020-02-18

### Removed

- marketplace header

### Fixed

- image links and paths


## [1.0.0] - 2020-02-18

- initial release

<!-- Links -->
[keep a changelog]: https://keepachangelog.com/en/1.0.0/
[semantic versioning]: https://semver.org/spec/v2.0.0.html

<!-- Versions -->
[1.3.0]: https://github.com/DAmNRelentless/vscode-keepachangelog/compare/v1.2.2...v1.3.0
[1.2.2]: https://github.com/DAmNRelentless/vscode-keepachangelog/compare/v1.2.1...v1.2.2
[1.2.1]: https://github.com/DAmNRelentless/vscode-keepachangelog/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/DAmNRelentless/vscode-keepachangelog/compare/v1.1.2...v1.2.0
[1.1.2]: https://github.com/DAmNRelentless/vscode-keepachangelog/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/DAmNRelentless/vscode-keepachangelog/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/DAmNRelentless/vscode-keepachangelog/compare/v1.0.6...v1.1.0
[1.0.6]: https://github.com/DAmNRelentless/vscode-keepachangelog/compare/v1.0.5...v1.0.6
[1.0.5]: https://github.com/DAmNRelentless/vscode-keepachangelog/compare/v1.0.4...v1.0.5
[1.0.4]: https://github.com/DAmNRelentless/vscode-keepachangelog/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/DAmNRelentless/vscode-keepachangelog/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/DAmNRelentless/vscode-keepachangelog/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/DAmNRelentless/vscode-keepachangelog/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/DAmNRelentless/vscode-keepachangelog/releases/tag/v1.0.0
