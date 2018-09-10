import React from "react";

export default () => {
  return (
    <main>
      <style>
        {`
        :root {
          /* body
          ----------------------------------------------------*/
          --body-bg: #272822;
          --body-color: #fff;
          --body-font_family: "Courier New", Courier, monospace;
          --body-font_size: 1rem;
          --body-line_height: 1.5rem;
          --body-font: var(--body-font_size)/var(--body-line_height) var(--body-font_family);
          
          /* tag
          ----------------------------------------------------*/
          --tag-color: #569cd6;
          --tag-padding: 0.8em;
          --tag-border-color: var(--border-color);
          --corner-brace-color: #808080;
          
          /* attribute
          ----------------------------------------------------*/
          --attribute-name-color: #9cdcfe;
          --attribute-value-color: #ce9178;
          --attribute-hover-color: #fff;
          
          --element-content-color: #d4d4d4;
          --border-color: #a2a2a2;
          --data-attr-color: #a2a2a2;
          --attribute-padding: var(--tag-padding);  
          
          /* content
          ----------------------------------------------------*/
          --content-hover-color: #fff;
          --content-padding: var(--tag-padding);
          
           /* element
          ----------------------------------------------------*/
          --element-title-color: var(--data-attr-color);
          --element-title-border_color: var(--data-attr-color);
          
          /* blockquote
          ----------------------------------------------------*/
          --blockquote-color: var(--data-attr-color);
          --blockquote-border_color: var(--data-attr-color);
          --blockquote-padding: 0.3em;
        }
        
        body {
          font: var(--body-font);
          background-color: var(--body-bg);
          color: var(--body-color);
        }
        
        a {
          text-decoration: none;
          display: inline-block;
          vertical-align: top;
          color: inherit;
        }
        
        blockquote {
          color: var(--blockquote-color);
          padding: var(--blockquote-padding);
          border-left: 0.2em solid var(--blockquote-border_color);
        }
        
        :target {
          color: var(--body-color);
        }
        
        h1 {
          text-align: center;
          position: relative;
          z-index: 11;
        }
        
        .html-element {
          display: flex;
          justify-content: center;
          margin: 10em auto 0;
          position: relative;
          max-width: 58em;
        }
        
        .l-description-holder {
          margin-top: 11em;
          margin-right: 2em;
          margin-left: 2em;
        }
        
        .l-description-holder ol {
          color: var(--data-attr-color);
        }
        
        h2 {
          text-align: center;
        }
        
        .html-element::before {
          content: attr(data-element-name);
          color: var(--element-title-color);
          position: absolute;
          top: -7.9em;
          right: 0;
          text-align: center;
          padding: 0.1em 0.5em;
          z-index: 5;
          background-color: var(--body-bg);
          cursor: pointer;
        }
        
        .html-element::after {
          content: "";
          position: absolute;
          top: -7.1em;
          right: 1em;
          left: 1em;
          margin: 0 auto;
          height: 7em;
          border: 0.09em solid var(--element-title-border_color);
          border-bottom: 0;
        }
        
        .html-element__close-tag,
        .html-element__open-tag,
        .html-element__content {
          background-color: var(--body-bg);
        }
        
        .html-element:hover::before {
          --element-title-color: var(--content-hover-color);
        }
        
        .html-element:hover::after {
          --element-title-border_color: var(--content-hover-color);
        }
        
        .html-element__close-tag:hover::before,
        .html-element__open-tag:hover::before,
        .html-element__tag {
          color: var(--tag-color);
        }
        
        .html-element__close-tag,
        .html-element__open-tag {
          position: relative;
          border: 0.09em solid var(--tag-border-color);
        }
        
        .html-element__close-tag > a,
        .html-element__open-tag > a,
        .html-element__content > a {
          padding: var(--tag-padding);
        }
        
        .html-element__open-tag::before {
          max-width: 7em;
        }
        
        .html-element__close-tag::before,
        .html-element__open-tag::before {
          color: var(--data-attr-color);
          position: absolute;
          right: 0;
          bottom: -5em;
          left: 0;
          margin: 0 auto;
          text-align: center;
          padding: 0.1em;
          background-color: var(--body-bg);
          z-index: 5;
        }
        
        .html-element__close-tag::after,
        .html-element__open-tag::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: -3.2em;
          left: 0;
          margin: 0 auto;
          height: 100%;
          width: 1px;
          z-index: -1;
          background-color: var(--tag-border-color);
        }
        
        .html-element__open-tag::before {
          content: attr(data-tag-type);
        }
        
        .html-element__close-tag:hover,
        .html-element__open-tag:hover {
          cursor: pointer;
          --tag-border-color: var(--tag-color);
        }
        
        .html-element__close-tag::before {
          content: attr(data-tag-type);
          min-width: 3em;
        }
        
        .html-element__attribute-name {
          color: var(--attribute-name-color);
          position: relative;
        }
        
        .html-element__attribute-holder {
          position: relative;
        }
        
        .html-element__attribute-holder::before {
          content: attr(data-attribute-name);
          color: var(--data-attr-color);
          position: absolute;
          top: -7em;
          min-width: 8.5em;
          text-align: center;
          z-index: 7;
          padding: 0.1em;
          background-color: var(--body-bg);
          border: 0.09em solid var(--border-color);
        }
        
        .html-element__attribute-holder:hover::before {
          color: var(--attribute-hover-color);
          border-color: var(--attribute-hover-color);
        }
        
        .html-element__attribute-name::before {
          content: attr(data-attribute-name);
        }
        
        .html-element__attribute-name::before,
        .html-element__attribute-value::before {
          color: var(--data-attr-color);
          position: absolute;
          top: -4em;
          right: 0;
          left: 0;
          margin: 0 auto;
          text-align: center;
          z-index: 5;
          padding: 0.1em;
          background-color: var(--body-bg);
        }
        
        .html-element__attribute-name::before {
          max-width: 2.2xem;
        }
        
        .html-element__attribute-value::before {
          max-width: 3em;
        }
        
        .html-element__attribute-name::after,
        .html-element__attribute-value::after {
          content: "";
          position: absolute;
          bottom: 1.6em;
          right: 0;
          left: 0;
          margin: 0 auto;
          height: 500%;
          width: 1px;
          background-color: var(--border-color);
        }
        
        .html-element__attribute-name:hover::after {
          background-color: var(--attribute-name-color);
        }
        
        .html-element__attribute-value:hover::after {
          background-color: var(--attribute-value-color);
        }
        
        .html-element__attribute-name:hover::before {
          color: var(--attribute-name-color);
        }
        
        .html-element__attribute-value,
        .html-element__attribute-value:hover::before {
          color: var(--attribute-value-color);
        }
        
        .html-element__attribute-value {
          position: relative;
        }
        
        .html-element__attribute-value::before {
          content: attr(data-attribute-value);
        }
        
        .html-element__attribute-equal-sign,
        .html-element__corner-brace-left,
        .html-element__corner-brace-right {
          color: var(--corner-brace-color);
        }
        
        .html-element__content {
          color: var(--element-content-color);
          position: relative;
          border: 0.09em solid var(--border-color);
          margin: 0 1em;
        }
        
        .html-element__content::before {
          content: attr(data-content-name);
          color: var(--data-attr-color);
          position: absolute;
          bottom: -5em;
          right: 0;
          left: 0;
          margin: 0 auto;
          max-width: 4em;
          text-align: center;
          z-index: 5;
          padding: 0.1em;
          background-color: var(--body-bg);
        }
        
        .html-element__content::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: -3.2em;
          left: 0;
          margin: 0 auto;
          height: 100%;
          width: 1px;
          z-index: -1;
          background-color: var(--border-color);
        }
        
        .html-element__content:hover {
          cursor: pointer;
          border-color: var(--content-hover-color);
        }
        
        .html-element__content:hover::before {
          color: var(--content-hover-color);
        }
        
        .html-element__content:hover::after {
          background-color: var(--content-hover-color);
        }
        
        @media screen and (max-width: 64rem) {
          .html-element {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .html-element__content {
            margin: 1em 0 1em 2em;
          }
          
          .html-element__open-tag::before {
            top: -10em;
            bottom: auto;
          }
          
          .html-element__open-tag::after {
            top: -8.2em;
            height: 8em;
            bottom: auto;
          }
          
          .html-element::after {
            top: 0;
            bottom: 0;
            left: 0;
            height: 8em;
            margin: auto;
            border-bottom: 0.09em solid var(--element-title-border_color);
            border-left: 0;
            z-index: -1;
          }
          
          .html-element::before {
            top: 1em;
          }
        }
        `}
      </style>
      <section className="l-element-holder">
        <h1>Anatomy of an HTML element</h1>

        <div className="html-element" data-element-name="HTML element">
          <div className="html-element__open-tag" data-tag-type="Opening Tag">
            <a href="#openTag">
              <span className="html-element__corner-brace-left">&lt;</span>
              <span className="html-element__tag">p</span>{" "}
              <span
                className="html-element__attribute-holder"
                data-attribute-name="Attribute"
              >
                <object type="dirty/hack">
                  <a href="#attributeName">
                    <span
                      className="html-element__attribute-name"
                      data-attribute-name="Name"
                    >
                      class
                    </span>
                  </a>
                </object>
                <span className="html-element__attribute-equal-sign">=</span>
                <object type="dirty/hack">
                  <a href="#attributeValue">
                    <span
                      className="html-element__attribute-value"
                      data-attribute-value="Value"
                    >
                      "description"
                    </span>
                  </a>
                </object>
              </span>
              <span className="html-element__corner-brace-right">&gt;</span>
            </a>
          </div>
          <div className="html-element__content" data-content-name="Content">
            <a href="#content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </a>
          </div>
          <div className="html-element__close-tag" data-tag-type="Closing Tag">
            <a href="#closeTag">
              <span className="html-element__corner-brace-left">&lt;/</span>
              <span className="html-element__tag">p</span>
              <span className="html-element__corner-brace-right">&gt;</span>
            </a>
          </div>
        </div>
      </section>
      {/* <section className="l-description-holder">
        <h2>Description</h2>
        <p>The main parts of our element are:</p>
        <ol>
          <li id="openTag">
            <b>The opening tag:</b> This consists of the name of the element (in
            this case, p), wrapped in opening and closing angle brackets. This
            states where the element begins or starts to take effect — in this
            case where the start of the paragraph is.
          </li>
          <li id="closeTag">
            <b>The closing tag:</b> This is the same as the opening tag, except
            that it includes a forward slash before the element name. This
            states where the element ends — in this case where the end of the
            paragraph is. Failing to include a closing tag is a common beginner
            error, and can lead to strange results.
          </li>
          <li id="content">
            <b>The content:</b> This is the content of the element, which in
            this case is just text.
          </li>
          <li>
            <b>The attribute:</b> Contains the extra information about the
            element which you don't want to appear in the actual content
            (optional).
          </li>
          <li>
            <b>The HTML element:</b> The opening tag, plus the closing tag, plus
            the content, plus attributes (optional), equals the HTML element.
          </li>
        </ol>
        <p>An attribute should have:</p>
        <ol>
          <li>
            A space between it and the element name (or the previous attribute,
            if the element already has one or more attributes.)
          </li>
          <li id="attributeName">
            The attribute name, followed by an equals sign.
          </li>
          <li id="attributeValue">
            An attribute value, with opening and closing quote marks wrapped
            around it.
          </li>
        </ol>
      </section> */}
    </main>
  );
};
