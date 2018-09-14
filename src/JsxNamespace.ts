import m from "mithril";

declare global {
  namespace JSX {
    interface Element extends m.Vnode<any, any> {}
    interface IntrinsicElements {
      [key: string]: any;
    }
    interface ElementAttributesProperty {
      __tsx_attrs: any;
    }

    interface ClassComponent<A> extends m.ClassComponent<A> {
      view(vnode: m.Vnode<A, this>): m.Children | null | void;

      __tsx_attrs: A & m.Lifecycle<A, this> & { key?: string | number };
    }
  }
}
