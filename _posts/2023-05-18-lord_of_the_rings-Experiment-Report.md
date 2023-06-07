---
layout: post
title: "LPA Experiment - lord_of_the_rings "
description: "Trying to identify ChatGPT written text in lord_of_the_rings "
date: 2023-05-18
tags: [LPA ,Thesis , ML, Awesome , lord_of_the_rings]
---
<!--more-->

## Goal of the Experiment
In this experiment we try to see if we can detect chatGPT written text on a topic using LPA.

We have taken **2** stories written by many different writers on lord_of_the_rings.

We also took **50** 
chatGPT along side with the stories and tested to see whether the Distance from the DVR is significantly different.

## Results

The Prompts were the **[17 23 22 12 16 35 36 27 26  9  8 47 46 32 33 14 13  6  7  3  2 34 18 19
20 21 40 41 50 43 42 30 29 37 38 39  1  4  5 24 25 51 52 48 49 11 10 45
44 28]**  furthest from the DVR out of all the 52 stories (1 is the closest).

### Distances
The average distance of the real fanfiction from the DVR is: **3.66**
The average distance of the poromts fanfiction from the DVR is: **3.73**
After running a t-test we we arrived at this conclusion at 95% certainty:
**There is no significant difference between the distances of the real and prompt datasets, or the mean distance of the real dataset is smaller than that of the prompt dataset.**

## F1 for finding prompts score:

The best range that found is **4.74** which means that **Within the range [3.3545, 4.7352], there are 50 prompts and 2 reals, with a frequency of 0.9615 and a recall of 1.0000**

Our best f1 result was **0.98 **

## F1 for finding prompts score:

### Results histograms
The histograms images can be found at Images folders

![](images/images-18052023/lord_of_the_rings-fanfiction_histogram.jpg)

![](images/images-18052023/lord_of_the_rings-prompts_histogram.jpg)



#### Heatmap of similarity 
![](images/images-18052023/lord_of_the_rings-heatmap.jpg")

