import m from "mithril";
// import "./JsxNamespace";

import { MithrilTsxComponent } from "mithril-tsx-component";

interface Attrs {
  Comp: any;
}

export default class HelloWorld extends MithrilTsxComponent<Attrs> {
  count = 12;
  view({ attrs }: m.Vnode<Attrs, this>) {
    let Comp = attrs.Comp;
    return (
      <div class="main">
        <h1>Hello World!!!! {this.count}</h1>
        <div>
          <Comp title="fdafd" />
        </div>
      </div>
    );
  }
}
