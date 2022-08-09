---
title: Windup 6.0.0 Release Notes
description: Windup 6.0.0 Release Notes
featured: true
author: mrizzi
date: 2022-08-09T00:00:00Z
tags:
  - release notes
---
# Windup 6.0.0 Release Notes

## New and updated features

* new [Tackle-DiVA (Data-intensive Validity Analyzer)](https://github.com/konveyor/tackle-diva) addon from an IBM Research team to analyze application transaction (thanks to [akihikot](https://github.com/akihikot), [YasuKatsuno](https://github.com/YasuKatsuno), [rofrano](https://github.com/rofrano)): add the `--enableTransactionReport` option to see it in action
* new YAML addon to have the YAML files rendered in reports to make it easier to check where a rule has identified an issue, if any
* updated to latest and greatest Forge and Furnace versions (thanks [gastaldi](https://github.com/gastaldi))

Windup 6.0.0 release includes new rules sets for:
* migrating JBoss EAP applications to Azure AppService (thanks [dfuenzalida](https://github.com/dfuenzalida))
* migrating SpringBoot applications to Azure AKS (thanks [agoncal](https://github.com/agoncal))
* upgrading Java applications to OpenJDK 17 (thanks [neugens](https://github.com/neugens), [gnu-andrew](https://github.com/gnu-andrew) and [ItsLeon15](https://github.com/ItsLeon15))
* upgrading Java applications from JavaEE 8 to JakartaEE 9

