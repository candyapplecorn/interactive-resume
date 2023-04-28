import React from "react";

interface Props<MdxType> {
  keywordMap: Record<string, MdxType>;
  children: MdxType;
}
export default function PopupLinkifier(props: Props<React.ReactElement>) {
  return <span>{props.children}</span>;
}
