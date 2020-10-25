import React, { Component } from "react";
import { Icon } from "semantic-ui-react";

class Container extends Component {
  render() {
    const { component } = this.props;
    return (
      <React.Fragment>
        <div
          className="layout-ber"
          ref={(ref) => {
            this.layoutBer = ref;
          }}
        >
          <div>
            <Icon loading name="react" size="large" />
          </div>
        </div>

        <header
          ref={(ref) => {
            this.header = ref;
          }}
        >
          <div
            className="button"
            onClick={() => {
              if (document.body.style.paddingLeft) {
                document.body.style.paddingLeft = null;
                this.layoutBer.style.width = null;
                this.header.style.left = null;
                // this.aside.style.display = null;
              } else {
                document.body.style.paddingLeft = "0px";
                this.layoutBer.style.width = "0px";
                this.header.style.left = "0px";
                // this.aside.style.display = "none";
              }
            }}
          >
            <Icon name="bars" size="large" />
          </div>
          <div className="header-layout">
            <h4 className="center">name</h4>
          </div>
          <div>
            <Icon name="bars" size="large" />
          </div>
        </header>
        <aside
          className="sidebar"
          ref={(ref) => {
            this.aside = ref;
          }}
        >
          <div className="sidebar-h right">
            <Icon
              name="x button"
              onClick={() => {
                this.aside.style.display = "none";
              }}
            />
          </div>
          <div>
            <h3>사이드바</h3>
            <p>가나다라바</p>
            <p>가나다라바</p>
            <div></div>
          </div>
        </aside>

        <div
          className="side button"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <Icon name="chevron circle up" color='blue' size="large" />
        </div>

        <main>
          <div className="wrapper">
            <article>
              {component}

      
            </article>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Container;
