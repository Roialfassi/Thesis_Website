---
layout: post
title: "LPA Experiment - twilight Summary The Opposite Way"
description: "Trying to identify ChatGPT written text in twilight "
date: 2023-04-27
tags: [LPA ,Thesis , ML, Awesome , twilight]
---
<!--more-->
## Goal of the Experiment
In this experiment we try to see if we can detect chatGPT written text on a topic using LPA.

We ran 50 on twilight where:

We have taken **6283** stories written by 5444 different writers on twilight.

We also took all the chatGPT along side with the stories and tested to see whether the Distance from the DVR is significantly different.

## Results

### Distances
The average distance of the real fanfiction from the DVR is: **0.40**
The average distance of the poromts fanfiction from the DVR is: **0.22**
The median distance of the real fanfiction from the DVR is: **0.30**
The median distance of the poromts fanfiction from the DVR is: **0.22**
After running a t-test we we arrived at this conclusion at 95% certainty:
**There is a significant difference between the distances of the real and prompt datasets, and the mean distance of the real dataset is not smaller than that of the prompt dataset.**

## F1
Our **average** f1 result was **0.99 **
Our **top** f1 result was **1.00 **
Our **worst** f1 result was **0.98**
Our **median** f1 result was **0.98**

## Threshold
Our **average** Threshold was **0.43 **
Our **highest** Threshold was **0.69 **
Our **lowest** Threshold was **0.31**
Our **median** Threshold was **0.32**

## Frequency
Our **average** frequency was **0.98 **
Our **highest** frequency was **1.00 **
Our **lowest** frequency was **0.97**
Our **median** frequency was **0.97**

## Recall
Our **average** recall was **1.00 **
Our **highest** recall was **1.00 **
Our **lowest** recall was **1.00**
Our **median** recall was **1.00**

![](/images/Experiments/KDE-Twighlight.jpg)