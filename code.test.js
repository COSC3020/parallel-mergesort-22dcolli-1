//slightly altered testing from mergesort repo, updated for an async function
const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testSort =
    jsc.forall("array nat", async function(arr) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = JSON.parse(JSON.stringify(arr));
        const sortedA1 = await pMergesort(a1);
        return JSON.stringify(sortedA1) ==
            JSON.stringify(a2.sort(function(a, b)
                { return a - b; }));
    });

jsc.assert(testSort);

