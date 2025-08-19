import fs from 'fs'

import matter from 'gray-matter'


export type PageMetadata = {
    path: string
    url: string
    frontmatter: any
}

export type IndexPage = {
    content: PageMetadata[]
    allPages: PageMetadata[]
    prevURL: string
    nextURL: string
    pageNumber: number
}

/**
 * Filter files that are not markdown content.
 */
function filterPage(path: string): boolean {
    // Online include markdown files and exclude path templates.
    return path.endsWith('.md') && !path.endsWith('].md')
}

function getFileMetadata(filePath: string, basePath: string, prefix: string): PageMetadata {
    const result = {path: filePath, url: '', frontmatter: {}}
    result.url = filePath.replace('.md', '').replace('\\', '/')
    result.url = `${prefix}/${result.url}.html`

    const src = fs.readFileSync(basePath + '/' + filePath, 'utf-8')
    result.frontmatter = matter(src).data
    return result
}

/**
 * Helper to be used in `index[counter].paths.ts` files.
 */
export function getIndexPages(srcPath: string, prefix: string, page_size: number = 10) {
    return {
        paths: () => {
            const allPages = fs
                .readdirSync(srcPath,  { recursive: true })
                .filter((file) => filterPage(file))
                .map((file) => getFileMetadata(file, srcPath, prefix))
                .sort((a, b) => b.frontmatter.date > a.frontmatter.date ? 1 : -1)

            const total = Math.ceil(allPages.length / page_size)

            return Array.from({length: total}).map((_, index) => {
                const current = index + 1
                let prevURL = `index-${current - 1}.html`
                if (current === 1) {
                    prevURL = ''
                }
                if (current === 2) {
                    prevURL = 'index.html'
                }
                const nextURL =
                    current < total ? `index-${current + 1}.html` : ''
                const cursor = current === 1 ? '' : `-${current}`
                const content = allPages.slice(index * page_size, (index + 1) * page_size)

                let indexPageContent: IndexPage = {
                    content,
                    allPages,
                    prevURL,
                    nextURL,
                    pageNumber: current,
                }
                // cursor is used by vitepress to generate the path.
                // The other values are custom content.
                return {params: {cursor, ...indexPageContent}}
            })
        },
    }
}
