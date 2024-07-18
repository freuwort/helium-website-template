export const useMenu = (menu: 'main'|'legal'|'about') => {
    const menus = ref({
        'main': [
            { id: '1000', label: "Home", href: "/" },
            { id: "2000", label: "Aktuelle Angebote", href: "/angebote" },
            { id: "3000", label: "Services", href: "/services", children: [
                { id: "4200", label: "Foodservice", href: "/foodservice" },
            ]},
            { id: "5000", label: "Über uns", href: "/ueber-uns" },
            { id: "6000", label: "Karriere", href: "/karriere" },
        ],
        'legal': [
            { id: '1000', label: "Impressum", href: "/impressum" },
            { id: '2000', label: "Datenschutz", href: "/datenschutz" },
            { id: '3000', label: "Lizenzen & Bildnachweise", href: "/lizenzen" },
            { id: '4000', label: "AGBs", href: "/agbs" },
        ],
        'about': [
            { id: '1000', label: "Philosophie", href: "/philosophie" },
            { id: '2000', label: "Karriere", href: "/karriere" },
            { id: '3000', label: "Kontakt", href: "/kontakt" },
        ],
    })

    return menus.value[menu]
}
