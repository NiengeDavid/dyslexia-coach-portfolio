export const slider = `*[_type == "slider"] | order(_createdAt desc) {
    image {
      asset -> {
        url
      }
    },
    hint,
    alt,
    solution
}`

export const navfeed = `*[_type == "navbar"] {
  logo {
    asset -> {
      url
    }
  },
  yourname,
  button
}`

export const menu = `*[_type == "menu"] | order(_createdAt asc) {
  item,
}`

export const about = `*[_type == "about"] {
  heading,
  xlug,
  mantra,
  image1 {
    asset -> {
      url
    }
  },
  image2 {
    asset -> {
      url
    }
  },
  alt1,
  alt2,
  p1
}`

export const aboutMe = `*[_type == "aboutme"] | order(_createdAt asc) {
  content,
}`

export const featured = `*[_type == "featured"] {
  logo {
    asset -> {
      url
    }
  },
  alt,
  link
}`

export const sections =  `*[_type == "sections"] {
  title,
  description
}`