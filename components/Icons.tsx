import React from 'react'

const Icons = {
  first: (
    <path
      d='M8 56V8h8v22l20-20v20l20-20v44L36 34v20L16 34v22H8Z'
      fill='currentColor'
    />
  ),
  prev: <path d='M16 56V8h8v22l20-20v44L24 34v22h-8Z' fill='currentColor' />,
  back: (
    <path d='M36 10V30L56 10V54L36 34V54L14 32L36 10Z' fill='currentColor' />
  ),
  fwrd: (
    <path d='M32 54V34L12 54V10l20 20V10l22 22-22 22Z' fill='currentColor' />
  ),
  next: <path d='M48 8v48h-8V34L20 54V10l20 20V8h8Z' fill='currentColor' />,
  last: (
    <path
      d='M56 8v48h-8V34L28 54V34L8 54V10l20 20V10l20 20V8h8Z'
      fill='currentColor'
    />
  ),
  twitter: (
    <path
      d='M63.877 12.184a26.67 26.67 0 0 1-7.533 2.067 13.221 13.221 0 0 0 5.768-7.262 27.102 27.102 0 0 1-8.339 3.158 13.066 13.066 0 0 0-9.576-4.158c-7.245 0-13.12 5.875-13.12 13.112 0 1.04.12 2.04.339 2.998-10.907-.515-20.573-5.752-27.043-13.67-1.138 1.926-1.776 4.163-1.776 6.6 0 4.56 2.32 8.568 5.835 10.923a13.077 13.077 0 0 1-5.941-1.643v.163c0 6.36 4.514 11.664 10.522 12.872a13.238 13.238 0 0 1-5.899.227c1.683 5.208 6.52 9.005 12.278 9.112A26.315 26.315 0 0 1 3.12 52.296c-1.04 0-2.077-.061-3.12-.179 5.837 3.718 12.715 5.891 20.152 5.891 24.144 0 37.33-19.99 37.33-37.296 0-.557 0-1.12-.04-1.68a26.494 26.494 0 0 0 6.56-6.795l-.125-.053Z'
      fill='#1DA1F2'
    />
  ),
  patreon: (
    <path
      d='M41.03 1.397c-12.705 0-23.04 10.336-23.04 23.04 0 12.667 10.335 22.968 23.04 22.968C53.695 47.405 64 37.101 64 24.437c0-12.704-10.304-23.04-22.97-23.04ZM.007 62.765h11.253V1.397H.008v61.368Z'
      fill='#F96854'
    />
  ),
} as const

export type IconNames = keyof typeof Icons

interface IconProperties {
  className?: string
  viewBox?: string
  title?: string
  role?: string
  size?: '16' | '24' | '32' | '40' | '64'
  name: string
}

export const Icon: React.FC<IconProperties> = ({
  viewBox,
  title,
  size,
  name,
  ...props
}) => {
  const iconName = name as IconNames
  const icon = Icons[iconName]

  return (
    <svg width={size} height={size} viewBox={viewBox} {...props}>
      {title && <title>{title}</title>}
      {icon}
    </svg>
  )
}

Icon.defaultProps = {
  viewBox: '0 0 64 64',
  size: '64',
  role: 'img',
}
