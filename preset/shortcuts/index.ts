import type { Shortcut } from 'unocss'
import { buttonShortcuts } from './button'
import { cardShortcuts } from './card'
import { contextMenuShortcuts } from './contextMenu'
import { generalShortcuts } from './general'
import { imageShortcuts } from './image'
import { inputShortcuts } from './input'
import { pixelImageShortcuts } from './pixelImage'
import { scrollbarShortcuts } from './scrollbar'

const shortcuts: Shortcut[] = [
  ...inputShortcuts,
  ...buttonShortcuts,
  ...cardShortcuts,
  ...generalShortcuts,
  ...imageShortcuts,
  ...contextMenuShortcuts,
  ...pixelImageShortcuts,
  ...scrollbarShortcuts,
]

export { shortcuts }
