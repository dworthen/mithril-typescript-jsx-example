import m from "mithril";
import { MitrhilTsxComponent } from "./JsxNamespace";

// import { MithrilTsxComponent } from "mithril-tsx-component";

export interface Attrs {
  title: (t: string) => JSX.Element;
  // render: typeof MitrhilTsxComponent;
  render: {
    new (a: m.CVnode): MitrhilTsxComponent;
  };
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
    let Ren = attrs.render;
    return (
      <h1>
        <Testing />
        <Ren />
        {children}
        {Comp("afdafd")}
      </h1>
    );
  }
}
