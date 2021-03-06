import React from "react";
import Link from "next/link";
import { css } from "@emotion/core";
import { percent, px, em } from "~/lib/cssUtil";
import { useSampleCounter } from "~/store/sample";

const wrapperStyle = css({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  top: px(0),
  left: px(0),
  width: percent(100),
  height: percent(100)
});

const titleStyle = css({
  fontWeight: "bold",
  marginBottom: em(0.5)
});

const PageAbout = () => {
  const [count, increment] = useSampleCounter();

  return (
    <div css={wrapperStyle}>
      <div css={titleStyle}>About</div>
      <button type="button" onClick={increment}>
        count up:{count}
      </button>
      <p>
        <Link href="/">
          <a href="/">top</a>
        </Link>
      </p>
    </div>
  );
};

PageAbout.getInitialProps = async () => ({
  pageTitle: "About",
  pagePath: "/about/",
  pageShareImage: await import("~/assets/meta/ogp-about.png")
});

export default PageAbout;
