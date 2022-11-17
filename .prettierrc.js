module.exports = {
    "printWidth": 80,
    "tabWidth": 2,
    "trailingComma": "all",
    "singleQuote": true,
    "semi": false,
    "importOrder": ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
    "importOrderSeparation": true,
    "importOrderSortSpecifiers": true,
    "plugins": ['@trivago/prettier-plugin-sort-imports'],
}