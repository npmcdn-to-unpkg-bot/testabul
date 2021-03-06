"use strict";
import test from 'ava';
import Context from '../../../src/async/ex1-callbacks/ex1-fixed';


test.cb("Output array should have files in correct order", t => {
    let ctx = new Context();
    ctx.start((output) => {
        t.same(output[0],"The first text");
        t.same(output[1],"The second text");
        t.same(output[2],"The third text");
        t.same(output[3],"Complete!");
        t.end();
    });
});



