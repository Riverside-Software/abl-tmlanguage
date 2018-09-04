const { assert, expect } = require('chai');
const shared = require('../shared.js');
let grammar = shared.grammar;

describe('', () => {
    let statement =
`{assigned "mExtVar"}      /* comment */`;

    let expectedTokens = [
        {"startIndex":0,"endIndex":1,"scopes":["source.abl","meta.include.abl","punctuation.section.abl"]},
        {"startIndex":1,"endIndex":19,"scopes":["source.abl","meta.include.abl","string.unquoted.include-argument.abl"]},
        {"startIndex":19,"endIndex":20,"scopes":["source.abl","meta.include.abl","punctuation.section.abl"]},
        {"startIndex":20,"endIndex":26,"scopes":["source.abl"]},
        {"startIndex":26,"endIndex":28,"scopes":["source.abl","comment.block.source.abl"]},
        {"startIndex":28,"endIndex":37,"scopes":["source.abl","comment.block.source.abl","comment"]},
        {"startIndex":37,"endIndex":39,"scopes":["source.abl","comment.block.source.abl"]}
    ];
    shared.itShouldMatchExpectedScopes(grammar, statement, expectedTokens);
})
describe('', () => {
    let statement =
`{assigned &ExtVar}       /* comment */`;

    let expectedTokens = [
        {"startIndex":0,"endIndex":1,"scopes":["source.abl","meta.include.abl","punctuation.section.abl"]},
        {"startIndex":1,"endIndex":17,"scopes":["source.abl","meta.include.abl","string.unquoted.include-argument.abl"]},
        {"startIndex":17,"endIndex":18,"scopes":["source.abl","meta.include.abl","punctuation.section.abl"]},
        {"startIndex":18,"endIndex":25,"scopes":["source.abl"]},
        {"startIndex":25,"endIndex":27,"scopes":["source.abl","comment.block.source.abl"]},
        {"startIndex":27,"endIndex":36,"scopes":["source.abl","comment.block.source.abl","comment"]},
        {"startIndex":36,"endIndex":38,"scopes":["source.abl","comment.block.source.abl"]}
    ];
    shared.itShouldMatchExpectedScopes(grammar, statement, expectedTokens);
})
describe('', () => {
    let statement =
`{assigned mExtVar}       /* comment */`;

    let expectedTokens = [
        {"startIndex":0,"endIndex":1,"scopes":["source.abl","meta.include.abl","punctuation.section.abl"]},
        {"startIndex":1,"endIndex":17,"scopes":["source.abl","meta.include.abl","string.unquoted.include-argument.abl"]},
        {"startIndex":17,"endIndex":18,"scopes":["source.abl","meta.include.abl","punctuation.section.abl"]},
        {"startIndex":18,"endIndex":25,"scopes":["source.abl"]},
        {"startIndex":25,"endIndex":27,"scopes":["source.abl","comment.block.source.abl"]},
        {"startIndex":27,"endIndex":36,"scopes":["source.abl","comment.block.source.abl","comment"]},
        {"startIndex":36,"endIndex":38,"scopes":["source.abl","comment.block.source.abl"]}
    ];
    shared.itShouldMatchExpectedScopes(grammar, statement, expectedTokens);
})
