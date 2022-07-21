import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { Stitches } from "@nsfw/ui";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: Stitches.getCssText() }}
          />
        </Head>
        <body style={{ position: "relative" }}>
          {/* TODO: this is a requirement for @nfsw/ui modals, review this for lib consumers */}
          <div
            id="modal-container"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
