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
    /* RSS Feed test suite, involves RSS feeds definitions
    *  and the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This test makes sure that the allFeeds variable has been defined 
         * and that it is not empty. 
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test checks to make sure that each feed object 
        *  has a URL that is defined and not empty
        */
        it('URLs are defined and not empty', function () {
            for (let feed in allFeeds) {
                expect(allFeeds[feed].url).toBeDefined();
                expect(allFeeds[feed].url).not.toBe("");
            }
        });

        /* This test checks to make sure each feed object has a name
         * that is defined and not empty
         */
        it('names are defined and not empty', function () {
            for (let feed in allFeeds) {
                expect(allFeeds[feed].name).toBeDefined();
                expect(allFeeds[feed].name).not.toBe("");
            }
        });

    });

    /* The menu test suite, involves the hidden menu and it's click functionality */
    describe('The menu', function () {
        let menuIcon = document.querySelector('.menu-icon-link')
        let menuHidden = document.querySelector('body');

        /* This test ensures that the menu is hidden by default */
        it('hidden by default', function () {
            expect(menuHidden.classList.contains("menu-hidden")).toBe(true) && menuHidden.classList.length.toBe(1);
        });

        /* This test ensure the menu is visibile when the menu icon is clicked. 
         * This test has two expectations:
         * 1) Once clicked, the menu will appear
         * 2) Once clicked again, the menu will disappear
         */

        it("is shown when menu icon is clicked and disappears when menu icon is clicked again", function () {
            menuIcon.click();
            expect(menuHidden.classList.contains("menu-hidden")).not.toBe(true) && menuHidden.classList.length.toBe(1);
            menuIcon.click();
            expect(menuHidden.classList.contains("menu-hidden")).toBe(true) && menuHidden.classList.length.toBe(1);
        });
    });

    /* Initial Entries test suite, involves the loadFeed function and initial entries when page loads */
    describe('Initial Entries', function () {
        // This callback makes sure the loadFeed function completes before running the test
        beforeEach(function (done) {
            loadFeed(0, function () {
                done()
            })
        });

        /* This test ensures that when the loadFeed function is called, 
         * there is at least a single .entry element within the .feed container.
         */
        it('contains at least a single .entry element', function () {
            expect(document.querySelectorAll('.feed .entry-link').length).not.toBe(0)
        });
    });

    /* New Feed Selection test suite, involves all the feeds in our allFeeds variable and their individual entries*/
    describe('New Feed Selection', function () {
        /* This test ensures that when a new feed is loaded, the contents are different
         */
        beforeEach(function (done) {
            loadFeed(0, function () {
                this.oldFeed = document.querySelector('.feed').innerHTML
                done()
            });
        })

        it('should show new content when new feed is clicked', function (done) {
            loadFeed(1, function () {
                let currentFeed = document.querySelector('.feed').innerHTML
                expect(currentFeed).not.toBe(oldFeed)
                done()
            });
            
        });
    });
}());