import React from "react";
import {Alert, Divider} from "antd";
import {ProjectHeader} from "./ProjectHeader";


export function Main() {
    return (<>
        <ProjectHeader/>

        <Divider/>

        <Alert
            message="Informational Notes"
            description={<>I sprinkled in some components from the <a href={"https://ant.design"}>Ant
                Design</a> component library. Despite it being a large library, notice how fast esbuild creates the
                bundle.</>}
            type="info"
            showIcon
        />
    </>)
}
