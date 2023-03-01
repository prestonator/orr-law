export const NavItemQuery = `
query NavItems($navigationIdOrSlug: String!) {
  renderNavigation(navigationIdOrSlug: $navigationIdOrSlug) {
    title
    path
  }
}
`;

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

export const AuthorQuery = `
query Author($authorId: ID) {
  author(id: $authorId) {
    data {
      attributes {
        name
        email
        phone
        title
        location
        slug
        bio
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
}`;

// Queries for Blog Posts
export const BlogPostQuery = `
query Posts {
  posts {
    data {
      id
      attributes {
        title
        content
        slug
        datePublished
        excerpt
        author {
          data {
            attributes {
              name
              bio
              phone
              email
              title
              location
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
        image {
          data {
            attributes {
              url
              alternativeText
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
      }
    }
  }
}
`;

export const BlogPostBySlugQuery = `
query Posts($filters: PostFiltersInput) {
  posts(filters: $filters) {
    data {
      id
      attributes {
        title
        content
        slug
        datePublished
        excerpt
        author {
          data {
            attributes {
              name
              bio
              phone
              email
              title
              location
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
        image {
          data {
            attributes {
              url
              alternativeText
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
      }
    }
  }
  }
`;

// Queries for Pages

export const PageTemplateQuery = `
query PageTemplates($filters: PageFiltersInput) {
  pages(filters: $filters) {
    data {
      attributes {
        heading
        subHeading
        heroImage {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        blocks {
          ... on ComponentGlobalFooter {
            footer {
              footerQuote
            }
            copyrightNotice
            links
          }
          ... on ComponentBlocksServiceCard {
            services {
              title
              content
            }
          }
        }
      }
    }
  }
}
`;
