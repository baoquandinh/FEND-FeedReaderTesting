# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

# How to successfully run the application
The test should run by itself. Simply look at the console log to see what it's currently testing. 

## IMPORTANT 
The final test randomly select a feed to test. By default, we are comparing the entrie to the default feed entries to come up when the page loads. If the feed entries are different, it will pass, otherwise it will fail because the feed entries are the same.
