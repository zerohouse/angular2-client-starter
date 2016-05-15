import {it, describe, expect, beforeEach} from 'angular2/testing';

describe('Todo', () => {

    let a:number;
    beforeEach(() => {
        a = 0;
    });

    it('should generate random `id`', () => {
        expect(a).toBeGreaterThan(-1);
    });
});
