import { styled } from '@stitches/react'
import React from 'react'
import Markdown from 'react-markdown'
import parse from 'rehype-parse'
import rehype2remark from 'rehype-remark'
import stringify from 'remark-stringify'
import { unified } from 'unified'

const StyledMarkdownBlock = styled(Markdown, {
  marginTop: '$space$md',
  maxWidth: '56rem',
})

export const MarkdownBlock: React.FC<{ html: string }> = ({ html }) => {
  const md = unified()
    .use(parse)
    .use(rehype2remark)
    .use(stringify)
    .processSync(html)
    .toString()

  return <StyledMarkdownBlock>{md}</StyledMarkdownBlock>
}
