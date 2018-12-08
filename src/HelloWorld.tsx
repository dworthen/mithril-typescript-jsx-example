import m, { Attributes } from "mithril";
import { MitrhilTsxComponent } from "./JsxNamespace";

// import { MithrilTsxComponent } from "mithril-tsx-component";

export interface Attrs {
  title: (t: string) => JSX.Element;
  // title: string;
}

class Testing extends MitrhilTsxComponent {
  view(vnode: m.CVnode) {
    return <h1>Cool</h1>;
  }
}

export default class HelloWorld extends MitrhilTsxComponent<Attrs> {
  count = 12;

  view({ attrs, children }: m.CVnode<Attrs>): m.CVnode<Attrs> {
    let Comp = attrs.title;
    return (
      <h1>
        <Testing />
        {children}
        {Comp("afdafd")}
      </h1>
    );
  }
}
