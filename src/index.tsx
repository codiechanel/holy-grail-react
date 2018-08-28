import * as React from "react";
import * as ReactDOM from "react-dom";
// import { Button } from 'material-ui';
import * as Material from "material-ui";
import * as style from "./style.module.css";
import "./index.css";
import "./styles.css";

// import style from './style.module.css'
import { Hello } from "./Hello";
import App from "./App";

function App2(props: any) {
  console.log("style", style.nice);

  return (
    <div className="vbox">
      {/*<header>Header</header>*/}
      <div className="hbox">
        <nav>
          <div className={"navContent"}>
            <h3>We like balloons</h3>
            <p>You can find all kinds of balloon related things here.</p>
          </div>
        </nav>
        <article>
          Force full width & height. If this block is removed, the layout
          height/length will be determined by the amount of content in the page.
          That might result in a page which has a footer only a few inches from
          the top of the viewport, or one which scrolls beyond the viewport.
          This forces the layout to always be full screen regardless of how
          much, or how little, content is in place. Neither is "right" or
          "wrong", there are valid cases for each. I just want to be clear
          what's controlling the page/viewport height. Force full width &
          height. If this block is removed, the layout height/length will be
          determined by the amount of content in the page. That might result in
          a page which has a footer only a few inches from the top of the
          viewport, or one which scrolls beyond the viewport. This forces the
          layout to always be full screen regardless of how much, or how little,
          content is in place. Neither is "right" or "wrong", there are valid
          cases for each. I just want to be clear what's controlling the
          page/viewport height. Force full width & height. If this block is
          removed, the layout height/length will be determined by the amount of
          content in the page. That might result in a page which has a footer
          only a few inches from the top of the viewport, or one which scrolls
          beyond the viewport. This forces the layout to always be full screen
          regardless of how much, or how little, content is in place. Neither is
          "right" or "wrong", there are valid cases for each. I just want to be
          clear what's controlling the page/viewport height. Force full width &
          height. If this block is removed, the layout height/length will be
          determined by the amount of content in the page. That might result in
          a page which has a footer only a few inches from the top of the
          viewport, or one which scrolls beyond the viewport. This forces the
          layout to always be full screen regardless of how much, or how little,
          content is in place. Neither is "right" or "wrong", there are valid
          cases for each. I just want to be clear what's controlling the
          page/viewport height. If this block is removed, the layout
          height/length will be determined by the amount of content in the page.
          That might result in a page which has a footer only a few inches from
          the top of the viewport, or one which scrolls beyond the viewport.
          This forces the layout to always be full screen regardless of how
          much, or how little, content is in place. Neither is "right" or
          "wrong", there are valid cases for each. I just want to be clear
          what's controlling the page/viewport height. Force full width &
          height. If this block is removed, the layout height/length will be
          determined by the amount of content in the page. That might result in
          a page which has a footer only a few inches from the top of the
          viewport, or one which scrolls beyond the viewport. This forces the
          layout to always be full screen regardless of how much, or how little,
          content is in place. Neither is "right" or "wrong", there are valid
          cases for each. I just want to be clear what's controlling the
          page/viewport height. Force full width & height.
        </article>
        <aside>
          <div className={"navContent2"}>

            <h3>Right Hand side</h3>
            <p>You can find all kinds of balloon related things here.</p>

          </div>
        </aside>
      </div>

      {/*<footer>Footer</footer>*/}
    </div>
  );
}

const Button2: React.StatelessComponent<{}> = ({ children }) => (
  <button className={style.cool}>{children}</button>
);

ReactDOM.render(
  <App2 />,
  document.getElementById("root")
  // <Hello compiler="TypeScript" framework="React" />,
  // document.getElementById("root")
);
