

export class PageOne {
  constructor() {
  }

  test() {
    console.log('Attempting System.import');
    System.baseURL = '/dist/bundle';
    System.import('dist/compiled/page-two').then((module: any) => {
      const PageTwo = module.PageTwo;
      const pageTwo = new PageTwo();
    }).catch(err => {
      console.log('error: ', err);
    });
  }
}

const pageOne = new PageOne();
pageOne.test();