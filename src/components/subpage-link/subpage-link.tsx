import React from "react";
import SubpageLinkContentHeader from "./subpage-link-content-header";
import SubpageLinkContentBody from "./subpage-link-content-body";
import styles from "./subpage-link.module.less";
import { useNavigate, useLocation } from "react-router-dom";

interface ComponentProps {
  component: React.ReactNode;
}

interface ChildrenProps {
  children: React.ReactNode;
}

type Props = ComponentProps | ChildrenProps;

// Typeguards
const isComponentProps = (props: Props): props is Props & ComponentProps =>
  "component" in props;
const isChildrenProps = (props: Props): props is Props & ChildrenProps =>
  "children" in props;

export default function SubpageLink(props: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  const escapeKeyChangeLink = (event: KeyboardEvent) => {
    if (event.key == "Escape") {
      navigate("/", { state: { from: location } });
    } else {
      // debugger;
    }
  };

  return (
    <div
      className={styles.root}
      style={{
        background: "none",
        border: "none",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "900px",
        position: "absolute",
        top: "100px",
      }}
      onKeyUp={escapeKeyChangeLink}
    >
      <SubpageLinkContentHeader
        handleClose={() => {
          navigate("/", { state: { from: location.pathname } });
        }}
        handleBack={() => {
          navigate(-1);
        }}
        handleForward={() => {
          navigate(1);
        }}
        prevPageLocation={history.state.usr?.from}
      />
      <SubpageLinkContentBody>
        {isComponentProps(props)
          ? props.component
          : isChildrenProps(props)
          ? props.children
          : null}
        <div onKeyUp={escapeKeyChangeLink}></div>
      </SubpageLinkContentBody>
    </div>
  );
}
