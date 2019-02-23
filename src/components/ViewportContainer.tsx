import React from "react";

interface IViewportContainerProps
    extends React.HTMLAttributes<HTMLDivElement> {}

export default (props: IViewportContainerProps) => (
    <div
        {...props}
        style={{
            display: "grid",
            maxWidth: "100vw",
            height: "100vh",
            padding: "0 1vw",
            ...props.style,
        }}
    />
);
