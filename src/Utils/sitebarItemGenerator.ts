import { NavLink } from "react-router-dom";
import { TSideberItem, TUserPath } from "../types/sitebartypes";

export const sidebarItemsGenerator = (items: TUserPath[], role: string) => {
  console.log(items);
  const sidebarItems = items.reduce((acc: TSideberItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: "",
      });
    }
    if (item?.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: "",
        })),
      });
    }
    return acc;
  }, []);
  return sidebarItems;
};
