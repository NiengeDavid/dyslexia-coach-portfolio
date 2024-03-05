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