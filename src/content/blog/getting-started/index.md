---
title: Get started
description: Get started instructions
featured: true
author: PhilipCattanach
date: 2022-08-03T00:00:00Z
tags:
  - docs
---

There are 2 distributions available within the first upstream release; the [CLI](#installing-the-cli) and the [Web UI](#installing-the-web-ui-locally).

## Prerequisites

- Java Development Kit (JDK) installed. WINDUP supports the following JDKs:
  - OpenJDK 11
  - Oracle JDK 11
- 8 GB RAM
- MacOS installation: the value of maxproc must be 2048 or greater.

## Installing the CLI

Extract the CLI zip file to a directory of your choice `<WINDUP_CLI_HOME>`.

If you are installing on a Windows operating system:

- Extract the CLI zip file to a folder named `windup` to avoid a Path too long error. Alternatively, extract the file with [7-Zip](https://www.7-zip.org/download.html) to a folder of any name you choose.
- If a _Confirm file replace_ window is displayed during extraction, click Yes to all.

### Running the CLI

Open a terminal and navigate to the <WINDUP_CLI_HOME>/bin/ directory.

Execute the `windup-cli` script, or `windup-cli.bat` for Windows, and specify the appropriate arguments:

```
./windup-cli \
--input /path/to/jee-example-app-1.0.0.ear \
--output /path/to/output \
--target eap:7
```

- `--input`: The application to be evaluated. Multiple input applications can be supplied, but each must be preceded by the `--input` argument. The path can also be a to a folder containing multiple applications
- `--output`: The output directory for the generated reports.
- `--target`: The target technology for the application migration.

For a full list of CLI options

```
./windup-cli --help
```

For a full list of CLI target technologies

```
./windup-cli --listTargetTechnologies
```

## Installing the Web UI locally

Extract the Web Console zip file to a directory of your choice `<WINDUP_UI_HOME>`.

If you are installing on a Windows operating system:

- Extract the Web Console zip file to a folder named `windup` to avoid a Path too long error. Alternatively, extract the file with [7-Zip](https://www.7-zip.org/download.html) to a folder of any name you choose.
- If a Confirm file replace window is displayed during extraction, click Yes to all.

### Running the Web UI

1. Open a terminal and navigate to the `<WINDUP_UI_HOME>` directory.
1. Execute the `run_windup.sh` script, or `run_windup.bat` for Windows.
1. Open a browser and navigate to [http://localhost:8080/windup-ui](http://localhost:8080/windup-ui)
1. The default *user* is `migration` and the default *password* is `password`.
1. Follow the wizard to create your first migration project, upload applications for analysis, define your analysis configuration, execute the analysis and review the reports.

## Installing the Web UI on OpenShift 4 (using UI)

1. Extract the Web Console zip file to a directory of your choice `<WINDUP_UI_HOME>`.
1. Navigate to the `<WINDUP_UI_HOME>/openshift/templates` directory.
1. Copy the content of file `web-template-empty-dir-executor.json`.
1. Go to Openshift Web Console, *Developer* view
1. Paste it in the "Import YAML / JSON" wizard and save it.
1. Click on the `+Add` link and open the `All services` catalog
1. Input `windup` (or `migration`) in the search text box and click on the Windup template ![Windup template in Catalog](https://github.com/windup/windup-openshift/raw/master/docs/catalog_templates.png)
1. Click on `Instantiate Template`
1. Scroll down to the bottom to deploy with the working default values and click on `Create` button
1. In the *Topology* page, click on the `windup-web-console` application then click the `Resources` tab
1. Click the `secure-windup-web-console` route to open the Windup web console
1. Enter the *user* `migration` and *password* `password` and click `Log in`
