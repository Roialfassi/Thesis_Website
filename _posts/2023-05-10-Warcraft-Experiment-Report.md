---
layout: post
title: "LPA Experiment - Warcraft "
description: "Trying to identify ChatGPT written text in Warcraft "
date: 2023-05-10
tags: [LPA ,Thesis , ML, Awesome , Warcraft]
---
<!--more-->

## Goal of the Experiment
In this experiment we try to see if we can detect chatGPT written text on a topic using LPA.

We have taken **373** stories written by many different writers on Warcraft.
    
We also took **2** 
chatGPT along side with the stories and tested to see whether the Distance from the DVR is significantly different.

## Results

The Prompts were the **[370 352]**  furthest from the DVR out of all the 375 stories (1 is the closest).

### Distances
The average distance of the real fanfiction from the DVR is: **0.24**
The average distance of the poromts fanfiction from the DVR is: **0.31**
After running a t-test we we arrived at this conclusion at 95% certainty:
**There is no significant difference between the distances of the real and prompt datasets, or the mean distance of the real dataset is smaller than that of the prompt dataset.**

## F1 for finding prompts score:

The best range that found is **0.33** which means that **Within the range [0.1491, 0.3273], there are 2 prompts and 368 reals, with a frequency of 0.0054 and a recall of 1.0000**

Our best f1 result was **0.01 **

## F1 for finding prompts score:

### Results histograms
The histograms images can be found at Images folders

![](images/images-11052023/Warcraft-fanfiction_histogram.jpg)

![](images/images-11052023/Warcraft-prompts_histogram.jpg)



#### Heatmap of similarity 
![](images/images-11052023/Warcraft-heatmap.jpg")

