import m from "mithril";
import HelloWorld from "./HelloWorld";
// import "./JsxNamespace";

m.route.prefix("");

const Strong = {
  view: (vnode: m.Vnode<{ title: string }, {}>) => (
    <strong>{vnode.attrs.title}</strong>
  )
};

class App implements m.ClassComponent {
  view(vnode: m.Vnode) {
    return <HelloWorld Comp={Strong} />;
    //   <HelloWorld>
    //     <Strong title="Nwe Title" />
    //   </HelloWorld>
    // );
  }
}

m.mount(document.body, App);
