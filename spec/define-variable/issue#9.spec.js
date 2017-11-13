const { assert, expect } = require('chai');
const shared = require('../shared.js');
let grammar = shared.grammar;

describe('', () => {
    //label-with-a-dot-inside.spec
    let statement =
`define frame f_sum
    xsuplan label 'Test.label' colon 58
    with row 4 centered.`;
    let expectedTokens = [
        [
            {"startIndex":0,"endIndex":6,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":6,"endIndex":7,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":7,"endIndex":12,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":12,"endIndex":19,"scopes":["source.abl","meta.define.abl"]}
        ],[
            {"startIndex":0,"endIndex":12,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":12,"endIndex":17,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":17,"endIndex":18,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":18,"endIndex":19,"scopes":["source.abl","meta.define.abl","string.single.complex.abl","punctuation.definition.string.begin.abl"]},
            {"startIndex":19,"endIndex":29,"scopes":["source.abl","meta.define.abl","string.single.complex.abl"]},
            {"startIndex":29,"endIndex":30,"scopes":["source.abl","meta.define.abl","string.single.complex.abl","punctuation.definition.string.end.abl"]},
            {"startIndex":30,"endIndex":31,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":31,"endIndex":36,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":36,"endIndex":37,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":37,"endIndex":39,"scopes":["source.abl","meta.define.abl","constant.numeric.source.abl"]}
        ],[
            {"startIndex":0,"endIndex":4,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":4,"endIndex":8,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":8,"endIndex":9,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":9,"endIndex":12,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":12,"endIndex":13,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":13,"endIndex":14,"scopes":["source.abl","meta.define.abl","constant.numeric.source.abl"]},
            {"startIndex":14,"endIndex":15,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":15,"endIndex":23,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":23,"endIndex":24,"scopes":["source.abl","meta.define.abl","punctuation.terminator.abl"]}
        ]];
    shared.itShouldMatchExpectedScopes(grammar, statement, expectedTokens);
})