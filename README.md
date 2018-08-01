# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

### How to successfully run the application
Download the entire repository and open index.html

## Running the tests
These tests are all ran automatically and nothing is needed to be done by the user  <br/>
Here are the following test suite and what they check <br />
RSS Feed test suite: <br />
1) Checks that the allFeeds variable has been defined and that it is not empty. <br />
2) Checks that each feed object has a URL that is defined and not empty <br />
3) Checks that each feed object has a name that is defined and not empty <br />
      
Menu test suite <br />
1) Test the visibility of menu and that it should be hidden by default <br />
2) Test the functionality of click on the menu icon, when the menu icon is click, menu should appear, if clicked agian, menu should disappear <br />

Initial Entries test suite <br />
1) This test ensures that when the loadFeed function is called there is at least a single .entry element within the .feed container. <br />

New Feed Selection test suite <br />
1) This test ensures that when a new feed is loaded, the contents are different <br />
       
