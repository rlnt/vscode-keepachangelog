# **Keep a Changelog**

> A [Visual Studio Code] extension that provides snippets for markdown files to create a changelog with the rulset of [Keep a Changelog].

---

![Version]
![Installs]
![Ratings]

---

## **Features**

#### KEY FEATURES
- several snippets to save time when creating a changelog
  - formatted according to [Keep a Changelog]
  - recommended to use with [Semantic Versioning]
- automatic cursor positioning after the snippet was pasted
- tab autofill mechanics to overwrite key values
  - used in repository links
  - used to create own version numbers
  - used to provide own date of release
  - ...

Example of how to initiate a changelog with the snippets:
![init]

---

## **All Snippets**

#### IMPORTANT
- you can always use *cl* instead of *changelog*
- the hyphen character is optional

| Snippet                        | Description                                                                                                                                                                                                                    |
|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| changelog-init                 | Initiates a new changelog with the header, needed links and a place for your releases and tags.                                                                                                                                |
| changelog-version              | Creates a standalone version tag. The version number and the date can be overwritten by using tabs. The current date is pasted by default.                                                                                     |
| changelog-version-full         | Same as changelog-version but additionally pastes all entries: added, changed, deprecated, removed, fixed, security.                                                                                                           |
| changelog-added                | Creates an *added* entry.                                                                                                                                                                                                      |
| changelog-changed              | Creates a *changed* entry.                                                                                                                                                                                                     |
| changelog-deprecated           | Creates a *deprecated* entry.                                                                                                                                                                                                  |
| changelog-removed              | Creates a *removed* entry.                                                                                                                                                                                                     |
| changelog-fixed                | Creates a *fixed* entry.                                                                                                                                                                                                       |
| changelog-security             | Creates a *security* entry.                                                                                                                                                                                                    |
| changelog-link-first-version   | Creates a reference link for your first version tag. The version number and the keys for the URL can be overwritten by using tabs.                                                                                             |
| changelog-link-compare-version | Creates a reference link to compare two versions. This should be used for any version past the first version. The version number and the to compare version number as well as the keys for the URL can be overwritten by tabs. |

---

## **Installation**

Go to the [Visual Studio Code Marketplate][Marketplace] and search for **Keep a Changelog** and click the *install* button on the top of the site. You should be prompted to open Visual Studio Code in order to install the extension.<br>

You can also use the integrated extension browser in [VSCode][Visual Studio Code] to install it.

---

## **Known Issues**

#### NOTHING KNOWN
- make sure to report issues in the [GitHub issues][Issues]
- you can also join our [Discord]

---

## **Contribution**

All you need to know is written down in our [contribution guidelines][Contribution].

---

## **License**

This project is licensed under the [MIT License][License].

---


## **Release Notes**

Everything related to versions and their release notes can be found in the [changelog][Changelog].

---

<!-- Links -->
[Visual Studio Code]: https://code.visualstudio.com/
[Keep a Changelog]: https://keepachangelog.com/
[Semantic Versioning]: https://semver.org/
[Marketplace]: https://marketplace.visualstudio.com/vscode
[Issues]: https://github.com/RLNT/vscode-keepachangelog/issues
[Discord]: https://discordapp.com/invite/Q3qxws6
[Contribution]: CONTRIBUTING.md
[License]: LICENSE.md
[Changelog]: CHANGELOG.md

<!-- Images -->
[Version]: https://vsmarketplacebadge.apphb.com/
[Installs]: https://vsmarketplacebadge.apphb.com/
[Ratings]: https://vsmarketplacebadge.apphb.com/
[init]: https://github.com/RLNT/vscode-keepachangelog/blob/master/images/init.gif
