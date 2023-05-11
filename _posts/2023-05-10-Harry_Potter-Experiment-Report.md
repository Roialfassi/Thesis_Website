---
layout: post
title: "LPA Experiment - Harry_Potter "
description: "Trying to identify ChatGPT written text in Harry_Potter "
date: 2023-05-10
tags: [LPA ,Thesis , ML, Awesome , Harry_Potter]
---
<!--more-->

## Goal of the Experiment
In this experiment we try to see if we can detect chatGPT written text on a topic using LPA.

We have taken **4500** stories written by many different writers on Harry_Potter.
    
We also took **2** 
chatGPT along side with the stories and tested to see whether the Distance from the DVR is significantly different.

## Results

The Prompts were the **[1917 3456]**  furthest from the DVR out of all the 4502 stories (1 is the closest).

### Distances
The average distance of the real fanfiction from the DVR is: **0.27**
The average distance of the poromts fanfiction from the DVR is: **0.28**
After running a t-test we we arrived at this conclusion at 95% certainty:
**There is no significant difference between the distances of the real and prompt datasets, or the mean distance of the real dataset is smaller than that of the prompt dataset.**

## F1 for finding prompts score:

The best range that found is **0.30** which means that **Within the range [0.1637, 0.3013], there are 2 prompts and 3454 reals, with a frequency of 0.0006 and a recall of 1.0000**

Our best f1 result was **0.00 **

### Results histograms

The histograms images can be found at Images folders

![](images/images-09052023/Harry_Potter-fanfiction_histogram.jpg)

![](images/images-09052023/Harry_Potter-prompts_histogram.jpg)



#### Heatmap of similarity 
![](images/images-09052023/Harry_Potter-heatmap.jpg")

