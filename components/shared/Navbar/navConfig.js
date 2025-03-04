export const navItems = [
    {
        name: "Home",
        href: "/",
        dropdown: false
    },
    {
        name: "Team",
        href: "/team",
        dropdown: false
    },
    {
        name: "Events",
        href: "/events",
        dropdown: false
    },
    {
        name: "NCCCC",
        href: "/ncccc",
        dropdown: false
    },
    {
        name: "FCCL",
        href: "/fccl",
        dropdown: true,
        dropdownItems: [
            {
                name: "Blog",
                href: "/fccl/"
            },
            {
                name: "Editorial Board",
                href: "/fccl/editorial-board"
            }
        ]
    },
    {
        name: "Books",
        href: "/books",
        dropdown: false,
    },
    {
        name: "Journal",
        href: "/journal",
        dropdown: true,
        dropdownItems: [
            {
                name: "Journal",
                href: "/journal"
            },
            {
                name: "Editorial Board",
                href: "/journal/editorial-board"
            },
            {
                name: "Board of Advisors",
                href: "/journal/board-of-advisors"
            }
        ]
    }
];

export const externalLinks = [
    {
        name: "MNLU Mumbai",
        href: "https://mnlumumbai.edu.in/",
        image: "mnlu"
    }
];