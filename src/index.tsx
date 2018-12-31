import m, { Attributes } from "mithril";
import HelloWorld from "./HelloWorld";
import "./JsxNamespace";
import { MitrhilTsxComponent } from "./JsxNamespace";

m.route.prefix("");

class Test extends MitrhilTsxComponent<{ title: string }> {
  // constructor(vnode: m.CVnode<{ title: string }>) {
  //   super(vnode);
  // }
  view(vnode: m.CVnode<{ title: string }>) {
    return <h1 style="color: red;">{vnode.attrs.title}</h1>;
  }
}

class Bold extends MitrhilTsxComponent<{}> {
  view(vnode: m.CVnode<{}>) {
    return <h1>Testing HOC</h1>;
  }
}

class App extends MitrhilTsxComponent {
  view(vnode: m.CVnode) {
    return (
      <HelloWorld
        render={Bold as typeof MitrhilTsxComponent}
        title={t => <Test title={t} />}
      >
        gfsgfsg
      </HelloWorld>
    );
  }
}

m.mount(document.body, App);
