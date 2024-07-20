import { members } from "@/config/team"
import { File, Folder, Tree } from "@/components/magicui/file-tree"

export function FileTreeDemo() {
  return (
    <div className="relative flex min-w-[300px] flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Tree
        className="overflow-hidden rounded-md bg-background p-2"
        initialSelectedId="7"
        initialExpandedItems={["Rohan", "Ritankar", "Om"]}
        elements={ELEMENTS}
      >
        <Folder element="ctrl-crew" value="1">
          {members.map((member, i) => (
            <Folder key={member.name} value={member.name} element={member.name}>
              <File value={member.mainSkill}>
                <p>skill.{member.mainSkill}</p>
              </File>
            </Folder>
          ))}
        </Folder>
      </Tree>
    </div>
  )
}

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "src",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "app",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "layout.tsx",
          },
          {
            id: "4",
            isSelectable: true,
            name: "page.tsx",
          },
        ],
      },
      {
        id: "5",
        isSelectable: true,
        name: "components",
        children: [
          {
            id: "6",
            isSelectable: true,
            name: "header.tsx",
          },
          {
            id: "7",
            isSelectable: true,
            name: "footer.tsx",
          },
        ],
      },
      {
        id: "8",
        isSelectable: true,
        name: "lib",
        children: [
          {
            id: "9",
            isSelectable: true,
            name: "utils.ts",
          },
        ],
      },
    ],
  },
]
