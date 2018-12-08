import m from "mithril";

export abstract class MitrhilTsxComponent<A = {}>
  implements m.ClassComponent<A> {
  private __props: A & m.Lifecycle<A, this> & { key?: string | number };

  constructor({ attrs }: m.CVnode<A>) {
    this.__props = attrs;
  }

  abstract view(vnode: m.CVnode<A>): m.Children | null | void;
}

declare global {
  namespace JSX {
    interface Element extends m.Vnode<any, any> {}
    // // interface Element<A = {}, B = {}> extends m.Vnode<A, B> {}
    interface IntrinsicElements {
      [key: string]: any;
    }
    interface IntrinsicAttributes {
      [key: string]: any;
    }
    interface ElementAttributesProperty {
      __props: any;
    }
  }
}
