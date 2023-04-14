---
title: Windup 6.0.0 Release Notes
description: Windup 6.0.0 Release Notes
featured: false
author: mrizzi
date: '2022-08-09T00:00:00Z'
tags:
  - release notes
---

## Artifacts

* [CLI](https://repo1.maven.org/maven2/org/jboss/windup/windup-cli/6.0.0.Final/windup-cli-6.0.0.Final-offline.zip)
* [Web Console](https://repo1.maven.org/maven2/org/jboss/windup/web/windup-web-distribution/6.0.0.Final/windup-web-distribution-6.0.0.Final-with-authentication.zip)

## New and updated features

* New [Tackle-DiVA (Data-intensive Validity Analyzer)](https://github.com/konveyor/tackle-diva) addon from an IBM Research team to analyze application transactions (thanks to [akihikot](https://github.com/akihikot), [YasuKatsuno](https://github.com/YasuKatsuno), [rofrano](https://github.com/rofrano)): add the `--enableTransactionReport` option to see it in action
* New YAML addon to have the YAML files rendered in reports to make it easier to check where a rule has identified an issue, if any
* Updated to latest and greatest Forge and Furnace versions (thanks [gastaldi](https://github.com/gastaldi))
* Improved `<project>` XML rule condition to search for artifacts in `pom.xml` files within `<parent>`, `<dependencyManagement>`, `<dependencies>`, `<pluginManagement>`, `<plugins>` blocks


## New and updated rulesets and recipes

This release includes rules sets for:

* Migrating JBoss EAP applications to Azure AppService (thanks [dfuenzalida](https://github.com/dfuenzalida))
* Migrating SpringBoot applications to Azure AKS (thanks [agoncal](https://github.com/agoncal))
* Upgrading Java applications to OpenJDK 17 (thanks [neugens](https://github.com/neugens), [gnu-andrew](https://github.com/gnu-andrew) and [ItsLeon15](https://github.com/ItsLeon15))
* Upgrading Java applications from JavaEE 8 to JakartaEE 9

Regarding the JavaEE 8 to Jakarta EE 9 transformation, Windup has new [Openrewrite](https://docs.openrewrite.org/) recipes for automating these changes:

* Migrate dependencies declared within pom.xml files
* Migrate package `import` statements
* Update XML deployment descriptors
* Update configuration properties
* Rename SPI files
