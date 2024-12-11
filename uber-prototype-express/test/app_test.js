const assert = require("assert");
const { describe } = require("mocha");
const request = require("supertest");
const app = require("../app");

describe("The express app", () => {
  it("handles a GET request to /api", (done) => {
    request(app)
      .get("/api")
      .end((error, response) => {
        assert(response.body.hi === "there");
        done();
      });
  });
});
