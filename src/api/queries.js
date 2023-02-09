export const NavItemQuery = `
query RenderNavigation($navigationIdOrSlug: String!) {
    renderNavigation(navigationIdOrSlug: $navigationIdOrSlug) {
      title
      path
    }
}`;

export const MediaQuery = `
query UploadFile($uploadFileId: ID) {
    uploadFile(id: $uploadFileId) {
      data {
        attributes {
          alternativeText
          url
        }
      }
    }
  }`;

export const AllPostsQuery = `
query Posts {
  posts {
    data {
      attributes {
        slug
        title
        datePublished
        content
        excerpt
        image {
          data {
            attributes {
              alternativeText
              url
            }
          }
        }
        categories {
          data {
            attributes {
              category
              slug
            }
          }
        }
        author {
          data {
            attributes {
              name
              slug
              headshot {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`;

export const PreviewPostQuery = `
query Posts {
  posts {
    data {
      attributes {
        title
        slug
        datePublished
        image {
          data {
            attributes {
              alternativeText
              url
            }
          }
        }
      }
    }
  }
}`;