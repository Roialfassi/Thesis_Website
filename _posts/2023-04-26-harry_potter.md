---
layout: post
title: "LPA Experiment - harry_potter Summary"
description: "Trying to identify ChatGPT written text in harry_potter "
date: 2023-04-26
tags: [LPA ,Thesis , ML, Awesome , harry_potter]
---
<!--more-->

## Goal of the Experiment
In this experiment we try to see if we can detect chatGPT written text on a topic using LPA.

We ran 7 on harry_potter where:

We have taken **23217** stories written by 19816 different writers on harry_potter.

We also took 2 chatGPT along side with the stories and tested to see whether the Distance from the DVR is significantly different.

## Results

### Distances
The average distance of the real fanfiction from the DVR is: **0.36**
The average distance of the poromts fanfiction from the DVR is: **0.32**
The median distance of the real fanfiction from the DVR is: **0.26**
The median distance of the poromts fanfiction from the DVR is: **0.32**
After running a t-test we we arrived at this conclusion at 95% certainty:
**There is a significant difference between the distances of the real and prompt datasets, and the mean distance of the real dataset is not smaller than that of the prompt dataset.**

## F1
Our **average** f1 result was **0.00 **
Our **top** f1 result was **0.01 **
Our **worst** f1 result was **0.00**
Our **median** f1 result was **0.00**

## Threshold
Our **average** Threshold was **0.34 **
Our **highest** Threshold was **0.40 **
Our **lowest** Threshold was **0.22**
Our **median** Threshold was **0.35**

## Frequency
Our **average** frequency was **0.00 **
Our **highest** frequency was **0.00 **
Our **lowest** frequency was **0.00**
Our **median** frequency was **0.00**

## Recall
Our **average** frequency was **0.92 **
Our **highest** frequency was **1.00 **
Our **lowest** frequency was **0.50**
Our **median** frequency was **1.00**

