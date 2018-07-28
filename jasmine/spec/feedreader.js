/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            console.log("The first test for RSS Feeds check to make sure that the feed is not empty")
            console.log(allFeeds)
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URLs are defined', function () {
            console.log("This second test checks to make sure that each feed object has a URL defined")
            console.log(`How many feeds total: ${allFeeds.length}`)
            for (let feed in allFeeds) {
                console.log("URL: " + allFeeds[feed].url)
                expect(allFeeds[feed].url).toBeDefined();
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined and not empty', function () {
            console.log("The third test will loop through each feed and ensures that each feed has a name defined and that the name is not empty: ")
            for (let feed in allFeeds) {
                console.log("Feed name: " + allFeeds[feed].name)
                expect(allFeeds[feed].name).toBeDefined();
                expect(allFeeds[feed].name).not.toBe("");
            }
        });

    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function () {
        let menuIcon = document.querySelector('.menu-icon-link')
        let menuHidden = document.querySelector('body');

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('hidden by default', function () {
            console.log("This fourth test will confirm that the menu is hidden by default... which is true, do you see the menu when the page loads? Of course not! Otherwise this test will fail")
            expect(menuHidden.classList.contains("menu-hidden")).toBe(true) && menuHidden.classList.length.toBe(1);
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it("is shown when menu icon is clicked", function () {
            console.log("This fifth test will check that when the menu is clicked, the menu will display. Go ahead and click on the menu, you will see it load")
            menuIcon.click();
            expect(menuHidden.classList.contains("menu-hidden")).not.toBe(true) && menuHidden.classList.length.toBe(1);
        });

        it("is not shown when menu icon is clicked again", function () {
            console.log("This sixth test will check that when the menu is clicked once more, if it was already clicked once, will hide the menu, try it out! ")
            menuIcon.click()
            expect(menuHidden.classList.contains("menu-hidden")).toBe(true) && menuHidden.classList.length.toBe(1);
        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function (done) {
            loadFeed(0, function () {
                done()
            })
        });

        it('contains at least a single .entry element', function () {
            console.log("This 7th test confirms that there are entries when the feed is loaded")
            expect(document.querySelector('.feed').children.length).not.toBe(0)
        });
    });




    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {
        let oldFeed = [];
        let currentFeed = [];
        let number = Math.floor(Math.random() * 3)
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        beforeEach(function (done) {
            loadFeed(0, function () {
                let entries = document.getElementsByClassName('entry')
                for (let i = 0; i < entries.length; i++) {
                    oldFeed.push(entries[i].innerText)
                }
                done()
            });
        })


        it('should show new content when new feed is clicked', function (done) {
            loadFeed(number, function () {
                console.log("This final test checks for new entries if you click on new feeds randomly.")
                console.log(allFeeds[number])
                let entries = document.getElementsByClassName('entry')
                for (let i = 0; i < entries.length; i++) {
                    currentFeed.push(entries[i].innerText)
                }
                
                if (currentFeed.length === oldFeed.length) {
                    for (let y = 0; y < currentFeed.length; y++) {
                        expect(currentFeed[y]).not.toBe(oldFeed[y])
                    }
                } else {
                    expect(currentFeed.length).toBe(oldFeed.length)
                }
                done()
            });
        });
    });

}());