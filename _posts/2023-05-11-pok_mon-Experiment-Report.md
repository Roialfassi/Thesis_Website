
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
    
    The Prompts were the **[4479 4473]**  furthest from the DVR out of all the 4502 stories (1 is the closest).

    ### Distances
    The average distance of the real fanfiction from the DVR is: **0.27**
    The average distance of the poromts fanfiction from the DVR is: **0.47**
    After running a t-test we we arrived at this conclusion at 95% certainty:
    **There is no significant difference between the distances of the real and prompt datasets, or the mean distance of the real dataset is smaller than that of the prompt dataset.**

    ## F1 for finding prompts score:
    
    The best range that found is **0.47** which means that **Within the range [0.1581, 0.4745], there are 2 prompts and 4477 reals, with a frequency of 0.0004 and a recall of 1.0000**
    
    Our best f1 result was **0.00 **
    
    ## F1 for finding prompts score:

    #### Results histograms
    The histograms images can be found at Images folders

    ![](images/images-11052023/pok_mon-fanfiction_histogram.jpg)

    ![](images/images-11052023/pok_mon-prompts_histogram.jpg)


    
    #### Heatmap of similarity 
    ![](images/images-11052023/pok_mon-heatmap.jpg")
    
    