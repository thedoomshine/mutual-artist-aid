import { styled } from '@stitches/react'
import { Records, Record } from 'airtable'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import React from 'react'
import { getArtists } from './api/airtable'
import { MarkdownBlock } from '~/components'

export const getStaticProps: GetStaticProps = async () => {
  const artists = await getArtists()
  return { props: { artists } }
}

const StyledMain = styled('main', {
  display: 'flex',
  color: '$colors$white',
  height: '100%',
  padding: '$space$md',
  width: '100%',
})

const StyledList = styled('ul', {
  flex: '1 1 auto',
})

const ListItem = styled('li', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '24rem',
  '& + li': {
    marginTop: '1rem',
  },
})

const StyledImage = styled(Image, {
  maxWidth: '100%',
  height: 'auto'
})

const StyledAnchor = styled('a', {
  color: 'inherit',
})

const Home = ({ artists }: { artists: Records<any>}) => {
  return (
    <StyledMain>
      <StyledList>
        {artists.map((artist: Record<any>) => (
          <ListItem key={artist.id}>
            <strong>{artist.name}</strong>
            {artist.image.map(({ id, url, width, height }) =>
              <StyledImage
                key={id}
                src={url}
                width={width}
                height={height}
                alt=""
              />
            )}
            <MarkdownBlock html={artist.bio} />
            <br />
            <p>links</p>
            <ul>
              {artist?.website &&
                <li>
                  <StyledAnchor href={artist?.website}>website</StyledAnchor>
                </li>
              }

              {artist?.twitter &&
                <li>
                  <StyledAnchor href={artist?.twitter}>twitter</StyledAnchor>
                </li>
              }

              {artist?.instagram &&
                <li>
                  <StyledAnchor href={artist?.instagram}>twitter</StyledAnchor>
                </li>
              }

              {artist?.payment &&
                <li>
                  <StyledAnchor href={artist?.payment}>$$$$</StyledAnchor>
                </li>
              }
            </ul>
          </ListItem>
        ))}
      </StyledList>
    </StyledMain>
  )
}

export default Home
