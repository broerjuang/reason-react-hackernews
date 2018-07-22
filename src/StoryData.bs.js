'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Belt_MapInt = require("bs-platform/lib/js/belt_MapInt.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");

var apiBaseUrl = "https://serverless-api.hackernewsmobile.com";

function topStoriesUrl(page) {
  return "" + (String(apiBaseUrl) + ("/topstories-25-" + (String(page) + ".json")));
}

function storyUrl(id) {
  return "" + (String(apiBaseUrl) + ("/stories/" + (String(id) + ".json")));
}

function idsArray(json) {
  return Json_decode.array(Json_decode.$$int, json);
}

function getCommentId(comment) {
  if (comment.tag) {
    return comment[0][/* id */0];
  } else {
    return comment[0][/* id */1];
  }
}

function comment(json) {
  var deletedMaybe = Json_decode.optional((function (param) {
          return Json_decode.field("deleted", Json_decode.bool, param);
        }), json);
  var deleted = deletedMaybe !== undefined ? deletedMaybe === true : false;
  if (deleted) {
    return /* CommentDeleted */Block.__(1, [/* record */[/* id */Json_decode.field("id", Json_decode.$$int, json)]]);
  } else {
    return /* CommentPresent */Block.__(0, [/* record */[
                /* by */Json_decode.field("by", Json_decode.string, json),
                /* id */Json_decode.field("id", Json_decode.$$int, json),
                /* kids */Json_decode.optional((function (param) {
                        return Json_decode.field("kids", idsArray, param);
                      }), json),
                /* parent */Json_decode.field("parent", Json_decode.$$int, json),
                /* text */Json_decode.optional((function (param) {
                        return Json_decode.field("text", Json_decode.string, param);
                      }), json),
                /* time */Json_decode.field("time", Json_decode.$$int, json)
              ]]);
  }
}

function commentsArray(json) {
  return Belt_MapInt.fromArray(Belt_Array.map(Json_decode.array(comment, json), (function (comment) {
                    return /* tuple */[
                            getCommentId(comment),
                            comment
                          ];
                  })));
}

function storyWithComments(json) {
  return /* record */[
          /* by */Json_decode.field("by", Json_decode.string, json),
          /* descendants */Json_decode.field("descendants", Json_decode.$$int, json),
          /* id */Json_decode.field("id", Json_decode.$$int, json),
          /* kids */Json_decode.optional((function (param) {
                  return Json_decode.field("kids", idsArray, param);
                }), json),
          /* score */Json_decode.field("score", Json_decode.$$int, json),
          /* time */Json_decode.field("time", Json_decode.$$int, json),
          /* title */Json_decode.field("title", Json_decode.string, json),
          /* url */Json_decode.optional((function (param) {
                  return Json_decode.field("url", Json_decode.string, param);
                }), json),
          /* descendentIds */Json_decode.field("descendentIds", idsArray, json),
          /* comments */Json_decode.field("comments", commentsArray, json)
        ];
}

function story(json) {
  return /* record */[
          /* by */Json_decode.field("by", Json_decode.string, json),
          /* descendants */Json_decode.field("descendants", Json_decode.$$int, json),
          /* id */Json_decode.field("id", Json_decode.$$int, json),
          /* score */Json_decode.field("score", Json_decode.$$int, json),
          /* time */Json_decode.field("time", Json_decode.$$int, json),
          /* title */Json_decode.field("title", Json_decode.string, json),
          /* url */Json_decode.optional((function (param) {
                  return Json_decode.field("url", Json_decode.string, param);
                }), json)
        ];
}

function stories(json) {
  return Json_decode.array(story, json);
}

var Decode = /* module */[
  /* idsArray */idsArray,
  /* getCommentId */getCommentId,
  /* comment */comment,
  /* commentsArray */commentsArray,
  /* storyWithComments */storyWithComments,
  /* story */story,
  /* stories */stories
];

function fetchTopStories(page, callback) {
  console.log("page", page);
  return fetch(topStoriesUrl(page)).then((function (prim) {
                    return prim.json();
                  })).then((function (json) {
                  var stories = Json_decode.array(story, json);
                  return Promise.resolve(Curry._1(callback, /* tuple */[
                                  page,
                                  stories
                                ]));
                })).catch((function (err) {
                return Promise.resolve((console.log("error", err), /* () */0));
              }));
}

function fetchStoryWithComments(id, callback) {
  fetch(storyUrl(id)).then((function (prim) {
            return prim.json();
          })).then((function (json) {
          var stories = storyWithComments(json);
          Curry._1(callback, stories);
          return Promise.resolve(/* () */0);
        }));
  return /* () */0;
}

exports.apiBaseUrl = apiBaseUrl;
exports.topStoriesUrl = topStoriesUrl;
exports.storyUrl = storyUrl;
exports.Decode = Decode;
exports.fetchTopStories = fetchTopStories;
exports.fetchStoryWithComments = fetchStoryWithComments;
/* No side effect */
