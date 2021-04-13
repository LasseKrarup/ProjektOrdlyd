/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

/**
* This is a sample showing how to create pages programatically.
* 
* Uncomment as needed.
* 
* Note that the basepath is relative to the basepath
* configured in gatsby-source-filesystem part of gatsby-config.js file
**/

// --- Slug generation for Markdown Remark ----
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `DigteneJson`) {
    const slug = createFilePath({ node, getNode })
    console.log("File path: " + slug)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

function slugify(string) {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')
  
    return string.toString().toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // This is where the files for which to generate slugs are determined
  const result = await graphql(`
    {
        allDigteneJson {
        edges {
            node {
                fields {
                  slug
                }
            }
        }
        }
    }  
  `)

  result.data.allDigteneJson.edges.forEach(({ node }) => {
    const slug = node.fields.slug
    createPage({
      path: slug,
      // Choose template to use for programatically created pages
      component: path.resolve(`./src/templates/singleDigt.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: slug,
      },
    })
  })
}



/**
* ADD OPTIONAL TYPES
* At the time of creating this starter
* it is often better to use dummy files so the source plugin creates types
**/

// exports.sourceNodes = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type SettingsJson implements Node {
//       tags: String
//       name: String
//       phone: String
//       email: String
//     }
//   `
//   createTypes(typeDefs)
// }