import React from "react";

type Props = {
  message?: string;
};

export default function Spinner(props: Props) {
  return (
    <div className="text-center">
      {props.message?.length && <h4 className="text-muted">{props.message}</h4>}
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
