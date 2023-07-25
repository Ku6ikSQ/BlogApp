import { FC, useState } from "react";
import { classNames } from "shared/classNames";
import cls from "./SideBar.module.scss";
import { Button } from "shared/ui/Button";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

export const SideBar: FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);

    const toggleCollapse = () => setCollapsed((prev) => !prev);

    return (
        <div
            className={classNames(cls["SideBar"], [], {
                [cls.collapsed]: collapsed,
            })}
        >
            <Button contrast onClick={toggleCollapse}>
                Collapse
            </Button>

            <div className="switchers">
                <ThemeSwitcher className={cls.switcher} />
            </div>
        </div>
    );
};
