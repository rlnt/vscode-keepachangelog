<div align="center">
<h1>Keep a Changelog</h1>

A [Visual Studio Code] extension that provides snippets for markdown files to create a changelog with the ruleset of [Keep a Changelog].

[![Version][version_badge]][version_link]
[![Downloads][downloads_badge]][marketplace]
[![Workflow Status][workflow_status_badge]][workflow_status_link]
[![License][license_badge]][license]

[Marketplace] | [Releases]

</div>

## **📑 Overview**

This is an extension for [Visual Studio Code].

It lets you easily create changelogs with snippets which follow the ruleset of [Keep a Changelog].<br>
It is recommended to use it with [Semantic Versioning].

### **Key Features:**

- several snippets to save time when creating a changelog
- snippet preview in IntelliSense
- customizable date format via extension settings
- more extension settings to fit your needs
- tab autofill mechanics to overwrite key values
- automatic cursor positioning after the snippet was pasted

### **Preview:**
![preview]

### **Includes Snippets:**

| Snippet         | Description                                                                                                                                                                                  |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| cl-init         | Initiates a new changelog with the header, needed links and a place for your releases and tags.                                                                                              |
| cl-version      | Creates a standalone version tag. The version number and the date can be overwritten by using tabs. The current date is pasted by default.                                                   |
| cl-version-full | Same as changelog-version but additionally pastes all entries: *added*, *changed*, *deprecated*, *removed*, *fixed*, *security*.                                                             |
| cl-entries      | Only pastes all entries without the version tag: *added*, *changed*, *deprecated*, *removed*, *fixed*, *security*.                                                                           |
| cl-added        | Creates an *added* entry.                                                                                                                                                                    |
| cl-changed      | Creates a *changed* entry.                                                                                                                                                                   |
| cl-deprecated   | Creates a *deprecated* entry.                                                                                                                                                                |
| cl-removed      | Creates a *removed* entry.                                                                                                                                                                   |
| cl-fixed        | Creates a *fixed* entry.                                                                                                                                                                     |
| cl-security     | Creates a *security* entry.                                                                                                                                                                  |
| cl-link-first   | Creates a reference link for your first version tag. The version number and the keys for the URL can be overwritten by using tabs.                                                           |
| cl-link-compare | Creates a reference link to compare two versions. This should be used for any version past the first version. The version numbers and the keys for the URL can be overwritten by using tabs. |

## **🔧 Installation**

Go to the [Visual Studio Code Marketplate][Marketplace] and click the *install* button on the top of the site. You should be prompted to open [Visual Studio Code] in order to install the extension.

You can also use the integrated extension browser in [VSCode][Visual Studio Code] to install it.

If you want to manually install the extension, check out the [releases] to download the latest `.vsix` file.

## **📖 Usage**

By default, snippets will only be available in Markdown files which are called `changelog.md` (case-insensitive).<br>
If you want to change that, you can do this in the extension settings. Keep in mind that only Markdown files are supported though.

This ensures that you only have the changelog snippets in the files you want them so they are not suggested in all Markdown documents.<br>
You can also configure if the snippets should be suggested in unnamed files.

All snippets of this extension are prefixed with `cl-`.<br>
The `-` is a trigger character which means that as soon as you write the `-`, you will get suggestions with snippets from the extension.

If you don't want this, you can disable the trigger character in the extension settings as well.

Furthermore, you can manually trigger the snippet suggestions because they mostly stay hidden in Markdown files as a standard behaviour of [VSCode][Visual Studio Code] itself.<br>
To do that, press CTRL + Spacebar after writing `cl` and you should see the snippets.

This is the default keybind for suggestions. If this doesn't work for you, make sure you check which keybind you have set for `editor.action.triggerSuggest`.

Take a look at the additional settings and configure the extension to your liking.

## **⏰ Changelog**

Everything related to versions and their release notes can be found in the [changelog].

## **🎓 License**

This project is licensed under the [LGPL-3.0][license].

<!-- Images -->
[preview]: https://github.com/DAmNRelentless/vscode-keepachangelog/blob/main/images/preview.gif?raw=true

<!-- Badges -->
[version_badge]: https://img.shields.io/github/v/release/DAmNRelentless/vscode-keepachangelog?style=flat-square
[version_link]: https://github.com/DAmNRelentless/vscode-keepachangelog/releases/latest
[downloads_badge]: https://vsmarketplacebadge.apphb.com/installs-short/rlnt.keep-a-changelog.svg?style=flat-square
[workflow_status_badge]: https://img.shields.io/github/workflow/status/DAmNRelentless/vscode-keepachangelog/CI?style=flat-square
[workflow_status_link]: https://github.com/DAmNRelentless/vscode-keepachangelog/actions
[license_badge]: https://img.shields.io/github/license/DAmNRelentless/vscode-keepachangelog?style=flat-square

<!-- Links -->
[visual studio code]: https://code.visualstudio.com/
[keep a changelog]: https://keepachangelog.com/
[marketplace]: https://marketplace.visualstudio.com/items?itemName=RLNT.keep-a-changelog
[releases]: https://github.com/DAmNRelentless/vscode-keepachangelog/releases
[semantic versioning]: https://semver.org/
[changelog]: CHANGELOG.md
[license]: LICENSE
