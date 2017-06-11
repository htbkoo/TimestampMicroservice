/**
 * Created by Hey on 11 Jun 2017
 */
var test = require('chai');
var format = require('string-format');

var timestampParser = require('../timestampParser');

describe("timestampParser", function () {
    [
        "some broken string",
        "123a"
    ].forEach(function(str){
        it(format("should return null for {} which is not unix timestamp nor natural language date", str), function () {
            //    given
            //    when
            var response = timestampParser(str);

            //    then
            test.expect(response).to.equal("null");
        });
    });
});