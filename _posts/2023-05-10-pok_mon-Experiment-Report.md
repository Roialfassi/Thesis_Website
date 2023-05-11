---
layout: post
title: "LPA Experiment - pok_mon "
description: "Trying to identify ChatGPT written text in pok_mon "
date: 2023-05-10
tags: [LPA ,Thesis , ML, Awesome , pok_mon]
---
<!--more-->

## Goal of the Experiment
In this experiment we try to see if we can detect chatGPT written text on a topic using LPA.

We have taken **4500** stories written by many different writers on pok_mon.
    
We also took **2** 
chatGPT along side with the stories and tested to see whether the Distance from the DVR is significantly different.

## Results

The Prompts were the **[1553 4469]**  furthest from the DVR out of all the 4502 stories (1 is the closest).

### Distances
The average distance of the real fanfiction from the DVR is: **0.27**
The average distance of the poromts fanfiction from the DVR is: **0.34**
After running a t-test we we arrived at this conclusion at 95% certainty:
**There is no significant difference between the distances of the real and prompt datasets, or the mean distance of the real dataset is smaller than that of the prompt dataset.**

## F1 for finding prompts score:

The best range that found is **0.24** which means that **Within the range [0.1580, 0.2415], there are 1 prompts and 1563 reals, with a frequency of 0.0006 and a recall of 0.5000**

Our best f1 result was **0.00 **

## F1 for finding prompts score:

### Results histograms

The histograms images can be found at Images folders

![](images/images-09052023/pok_mon-fanfiction_histogram.jpg)

![](images/images-09052023/pok_mon-prompts_histogram.jpg)



#### Heatmap of similarity 
![](images/images-09052023/pok_mon-heatmap.jpg")

