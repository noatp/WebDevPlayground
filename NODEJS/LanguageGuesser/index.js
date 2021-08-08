const franc = require("franc")
const langs = require("langs")
const colors = require("colors")

const input = process.argv[2]

const languageCode = franc(input)
if (languageCode === 'und') {
    console.log("Could not figure out the language...".red)
}
else {
    const language = langs.where("3", languageCode)
    console.log(language.name.green)
}
