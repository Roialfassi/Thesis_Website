---
layout: post
title: "LPA Experiment - Training A Model"
description: "Trying to identify ChatGPT written text"
feature_image: images\fanfic.png 
date: 2023-07-11
tags: [LPA ,Thesis , ML]
---
<!--more-->

## Goal of the Experiment
In this experiment we try to see if we can detect chatGPT written text by seeing the differences between the signatures of chatGPT written text on FanFiction

We have taken 50-60 ChatGPT written text on each topic ("Harry_Potter" , "lord_of_the_rings", "pok_mon" , "twilight" , "Warcraft") and the same amount of texts that were written by fans about each topic. 

We trained the data to classify which author wrote the text (GPT or Real) and then tested the model.
We trained a model for each topic and also on all the topics combined.

## Results
### Harry Potter 
|        |      | Predicted | Actual |
|--------|------|-----------|--------|
|        |      | GPT       | Real   |
| Actual | GPT  | 3         | 7      |
| Actual | Real | 0         | 83     |

Harry Potter was great on detecting real written text but not GPT even though it was trained on 45 GPT signatures and on 55 Real fanfiction texts

### Warcraft
|        |      | Predicted | Actual |
|--------|------|-----------|--------|
|        |      | GPT       | Real   |
| Actual | GPT  | 10        | 0      |
| Actual | Real | 0         | 32     |

The Warcraft Model was spot on.
Trained on 45 GPT and 57 Real

## Twilight
|        |      | Predicted | Actual |
|--------|------|-----------|--------|
|        |      | GPT       | Real   |
| Actual | GPT  | 10        | 0      |
| Actual | Real | 0         | 51     |

Trained on 49 GPT and 56 Real

## Pokemon
|        |      | Predicted | Actual |
|--------|------|-----------|--------|
|        |      | GPT       | Real   |
| Actual | GPT  | 9         | 1      |
| Actual | Real | 0         | 35     |

Trained on 47 GPT and 52 Real

## Lord of the Rings
|        |      | Predicted | Actual |
|--------|------|-----------|--------|
|        |      | GPT       | Real   |
| Actual | GPT  | 9         | 1      |
| Actual | Real | 1         | 41     |

Trained on 48 GPT and 58 Real

## Combined 
|        |      | Predicted | Actual |
|--------|------|-----------|--------|
|        |      | GPT       | Real   |
| Actual | GPT  | 42        | 8      |
| Actual | Real | 2         | 241    |

Trained on 243 GPT and 278 Real

## Conclusion 
The Model is really good at separating real Human text from GPT, Identifying what is not GPT is clearly done well
though Identifying GPT is not as consistent.