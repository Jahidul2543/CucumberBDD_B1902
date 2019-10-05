$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search_with_examples.feature");
formatter.feature({
  "line": 1,
  "name": "Search",
  "description": "",
  "id": "search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Search items using search box",
  "description": "",
  "id": "search;search-items-using-search-box",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User must be in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User search \"\u003citems\u003e\" using search box",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Related items should be on the \"\u003cexpected\u003e\" screen",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "search;search-items-using-search-box;",
  "rows": [
    {
      "cells": [
        "items",
        "expected"
      ],
      "line": 9,
      "id": "search;search-items-using-search-box;;1"
    },
    {
      "cells": [
        "books",
        "No results were found for your search books"
      ],
      "line": 10,
      "id": "search;search-items-using-search-box;;2"
    },
    {
      "cells": [
        "pen",
        "No results were found for your search pen"
      ],
      "line": 11,
      "id": "search;search-items-using-search-box;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4019884283,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Search items using search box",
  "description": "",
  "id": "search;search-items-using-search-box;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User must be in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User search \"books\" using search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Related items should be on the \"No results were found for your search books\" screen",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Search_with_example_steps_definitions.user_must_be_in_home_page()"
});
formatter.result({
  "duration": 98928044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "books",
      "offset": 13
    }
  ],
  "location": "Search_with_example_steps_definitions.user_search_using_search_box(String)"
});
formatter.result({
  "duration": 1104555564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No results were found for your search books",
      "offset": 32
    }
  ],
  "location": "Search_with_example_steps_definitions.related_items_should_be_on_the_screen(String)"
});
formatter.result({
  "duration": 30125193,
  "error_message": "java.lang.AssertionError: expected [No results were found for your search books] but found [No results were found for your search \"books\"]\n\tat org.testng.Assert.fail(Assert.java:96)\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\n\tat org.testng.Assert.assertEquals(Assert.java:118)\n\tat org.testng.Assert.assertEquals(Assert.java:453)\n\tat org.testng.Assert.assertEquals(Assert.java:463)\n\tat stepDefinitions.Search_with_example_steps_definitions.related_items_should_be_on_the_screen(Search_with_example_steps_definitions.java:28)\n\tat ✽.Then Related items should be on the \"No results were found for your search books\" screen(search_with_examples.feature:6)\n",
  "status": "failed"
});
formatter.after({
  "duration": 80195057,
  "status": "passed"
});
formatter.before({
  "duration": 4102450843,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Search items using search box",
  "description": "",
  "id": "search;search-items-using-search-box;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User must be in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User search \"pen\" using search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Related items should be on the \"No results were found for your search pen\" screen",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Search_with_example_steps_definitions.user_must_be_in_home_page()"
});
formatter.result({
  "duration": 6228980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pen",
      "offset": 13
    }
  ],
  "location": "Search_with_example_steps_definitions.user_search_using_search_box(String)"
});
formatter.result({
  "duration": 978518534,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No results were found for your search pen",
      "offset": 32
    }
  ],
  "location": "Search_with_example_steps_definitions.related_items_should_be_on_the_screen(String)"
});
formatter.result({
  "duration": 26298193,
  "error_message": "java.lang.AssertionError: expected [No results were found for your search pen] but found [No results were found for your search \"pen\"]\n\tat org.testng.Assert.fail(Assert.java:96)\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\n\tat org.testng.Assert.assertEquals(Assert.java:118)\n\tat org.testng.Assert.assertEquals(Assert.java:453)\n\tat org.testng.Assert.assertEquals(Assert.java:463)\n\tat stepDefinitions.Search_with_example_steps_definitions.related_items_should_be_on_the_screen(Search_with_example_steps_definitions.java:28)\n\tat ✽.Then Related items should be on the \"No results were found for your search pen\" screen(search_with_examples.feature:6)\n",
  "status": "failed"
});
formatter.after({
  "duration": 76534777,
  "status": "passed"
});
});