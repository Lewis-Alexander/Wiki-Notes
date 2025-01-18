import { QuartzFilterPlugin } from "../types"

export const RemoveNonPublish: QuartzFilterPlugin<{}> = () => ({
    name: "RemoveNonPublish",
    shouldPublish(_ctx, [_tree, vfile]) {
        const publishFlag: boolean =
            vfile.data?.frontmatter?.publish === true || vfile.data?.frontmatter?.publish === "true"
        return publishFlag;  
    },
})