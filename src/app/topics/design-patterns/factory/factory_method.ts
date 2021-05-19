export interface Product {
  method() : any;
}

export class concA implements Product {
  method () : any {
    return 'in Method A';
  }
}

export class concB implements Product {
  method () : any {
    return 'in Method B';
  }
}

export class prodFactory {
  static createProd (type : string) : any {
    if (type == 'a') {
      return new concA();
    }

    if (type == 'b') {
      return new concB();
    }

    return null;
  }
}