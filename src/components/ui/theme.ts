import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react"


const config = defineConfig({
  globalCss: {
    "*": {
      boxSizing: "border-box",
    },
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      margin: 0,
    },
    a: {
      textDecoration: "none",
      cursor: "pointer",
    },
    "ul, ol": {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    "img, embed, video, object": {
      display: "block",
      maxWidth: "100%",
      height: "auto",
    },
  },
  theme: {
    tokens: {
      colors: {
        primary: { value: "darkblue" },
        secondary: { value: "#EE0F0F" },
      },
      fonts: {
        body: { value: "system-ui, sans-serif" },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)


// Print all Chakra colors
// const colors = defaultConfig?.theme?.tokens?.colors
// if (colors && typeof colors === 'object') {
//   Object.entries(colors).forEach(([key, value]) => {
//     console.log(key, value)
//   })
// }
