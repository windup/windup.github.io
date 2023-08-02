---
title: Windup 6.3.0 Release Notes
description: Windup 6.3.0 Release Notes
featured: false
author: mrizzi
date: 2023-08-01T00:00:00Z
tags:
  - release notes
---

## New features

- Decompile and analyze Java 17 based applications 
- Rules Override enhancement: introduced a further degree of selectivity so that a rule will only be overridden if `rulesetId` and `ruleId` match and the target of the override ruleset matches the target provided for the analysis
- Eclipse Plugin Java 17 compatibility 
- Upgrade of the Windup Operator: it adopted Quarkus `2.13.7.Final` and the Quarkus Operator SDK `4.0.8`
- More details in the [changelog](https://github.com/windup/windup/releases/tag/6.3.0.Final)

## New rulesets and targets
- Java/Jakarta EE to Quarkus: New rules and recipes to support this migration path to Quarkus 3
- More migration rules to support Red Hat JBoss EAP 8, Hibernate 6, and Red Hat JBoss EAP XP5 
- Red Hat Java Web Server 6: support the upgrade of JWS / Tomcat applications to JWS 6 / Tomcat 10
- Camel 4: Comprehensive rulesets supporting upgrade to all Y stream releases of Camel 3 and to Camel 4
- More details in the [changelog](https://github.com/windup/windup-rulesets/releases/tag/6.3.0.Final)
