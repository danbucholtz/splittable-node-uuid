import * as uuid from 'node-uuid';

export class PageTwo {
  constructor() {
  }

  test() {
    console.log('Page Two: ', uuid.v4());
  }
}

const pageTwo = new PageTwo();
pageTwo.test();