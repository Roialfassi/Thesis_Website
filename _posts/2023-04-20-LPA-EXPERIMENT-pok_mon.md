---
layout: post
title: "LPA Experiment - Pok_mon"
description: "2023-04-02"
date: 2023-04-02
tags: [LPA ,Thesis , ML, Awesome , Pok_mon]
---
# LPA experiment in pok_mon

This repository contains code and data for the LPA experiment in pok_mon.

<!--more-->

## Goal of the Experiment
In this experiment we try to see if we can detect chatGPT written text on a topic using LPA.

We have taken 1035 stories written by 949 different writers on pok_mon.

We also took 31 chatGPT written story on that same topic in order to compare the distances from the DVR in order to find the difference and the threshold between the human written text and the chatGPT written text.

## Pre-Processing the Data
The pok_mon Fan Fiction was taken and cleaned from archive.org at [fan fiction dump](https://archive.org/download/Fanfictiondotnet1011dump)
- After downloading the raw data to the Dataset folder we unzip only the files with pok_mon in their name to Data/FanFictionTXT folder.
- Since all thet files are in txt form and contain metadata we create from each text file a csv with all the data separated in Data/FanFictionCSV
- We also create a prompts csv folder which contains each story and the prompt that created it in a unique csv file in Data/Prompts.
- We calculate the minimum and maximum of words in each ChatGPT story in order to use only stories with similar sizes (between 107 and 433 words per story here)
- We move only the stories with the appropriate sizes (+-50 words from the minimum and maximum) in Data/FanFictionNormalSizesCSV
- We Divide All of the stories by authors each author gets a floder with his own folder in Data/Divided_by_authors
- We Create a new folder with only the authors who have 2 stories or less in Data/authors_with_2Stories_OrLess
- We take all the stories from authors_with_2Stories_OrLess and copy all of them into a new folder 2Stories_OrLess_Undivided which the DVR will be created from
- We do a word frequency to the prompts authors_with_2Stories_OrLess and 2Stories_OrLess_Undivided each at a folder named word_freq in the respective folders

## Running LPA
After we have all the Data ready we are ready to run LPA and calculate distances
- We run DVR on all the Human made FanFiction which is named pok_mon-dvr.csv this iis the vector we compare all the distances to.
- We calculate and save the prompts DVR in Results/Prompts folder
- We calculate the signatures of each story to the Signatures divided in 3 folders , prompts , authors and undivided by authors
- We calculate the dvr of each author to Results\Author_Results
- We calculate the Distances into Results/Distances folder
- We have distnces of prompts from human-dvr, distnces of human from human-dvr and distnces of prompts from prompts-dvr

## Results

### Distances
The average distance of the real fanfiction from the DVR is: 0.32
The average distance of the poromts fanfiction from the DVR is: 0.20
After running a t-test we we arrived at this conclusion at 95% certainty:
There is a significant difference between the distances of the real and prompt datasets, and the mean distance of the real dataset is not smaller than that of the prompt dataset.

The best range that found is 0.19 which means that Within the range [0.1542, 0.1850], there are 14 prompts and 33 reals, with a frequency of 0.2979 and a recall of 0.4516
Our best f1 result was 0.36 

#### Results histograms
The histograms images can be found at Images folders

![](images/Experiments/Images/pok_mon-fanfiction_histogram.jpg)

![](images/Experiments/Images/pok_mon-prompts_histogram.jpg)

![](images/Experiments/Images/pok_mon-both_histogram.jpg)