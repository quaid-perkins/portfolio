const menuItems: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Education",
    href: "",
    subMenuItems: [
      {
        label: "Unit 1",
        href: "/education/unit-1",
      },
      {
        label: "Unit 2",
        href: "/education/unit-2",
      },
      {
        label: "Unit 7",
        href: "/education/unit-7",
      },
      {
        label: "Unit 8",
        href: "/education/unit-8",
      },
      {
        label: "Unit 11",
        href: "/education/unit-11",
      },
      {
        label: "Unit 15",
        href: "/education/unit-15",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default menuItems;
