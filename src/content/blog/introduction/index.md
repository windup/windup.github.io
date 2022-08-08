---
title: The WINDUP Project
description: An overview of the project
featured: true
author: PhilipCattanach
date: 2022-08-05T00:00:00Z
tags:
  - docs
---
## The WINDUP project

WINDUP is an assembly of tools that support large-scale Java application modernization and migration projects across a broad range of transformations and use cases. It accelerates application code analysis, supports effort estimation, accelerates code migration, and helps you move applications to the cloud and containers.

The CLI and Web UI distributions have now been released upstream. 
The Web UI can be run locally on a laptop, centrally on a server, or installed within an OpenShift cluster via the templates included within the distribution.  

The core of WINDUP is an extensible rules engine that analyzes Java applications.

The input into the analysis is a collection of Java archives or project source code folders.

The analysis configuration allows the user to specify the analysis configuration parameters. The most critical of which is the transformation target(s), a transformation target is the technology that the applications are being migrated to, e.g. Jakarta EE 9, JBoss EAP 7, Open Liberty, Quarkus, OpenJDK 17,  Azure AKS, etc.   

The output from an analysis is a collection of reports that detail the changes required to the input applications to adopt the target technologies. The reports detail which lines of code need to change, why, provide links supporting information and quantify the effort involved.

## Coming soon
Future releases of WINDUP will include a community operator to automate the deployment of the Web UI on Kubernetes, and IDE plugins/extensions for VSCode, IntelliJ, Eclipse, Eclipse CHE and CodeReady Studio.


