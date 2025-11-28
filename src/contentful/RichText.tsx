import { Document as RichTextDocument } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import Image from 'next/image'

type RichTextProps = {
	document: RichTextDocument | null
	imageOptions?: {
		width: number
		height: number
		alt?: string
	}
}

function RichText({ document }: RichTextProps) {
	const options = {
		renderNode: {
			// type any is used because the node type from Contentful is complex and not strictly typed here
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			[BLOCKS.EMBEDDED_ASSET]: (node: any) => {
				const { file, title } = node.data.target.fields
				const imageUrl = new URL(file.url, 'https://images.ctfassets.net')

				return (
					<figure className='w-fit shrink-0 float-left mr-4 mb-2'>
						<Image
							src={imageUrl.toString()}
							width={file.details.image.width}
							height={file.details.image.height}
							alt={title || 'Embedded Asset'}
							className='w-2xs'
							loading='eager'
						/>
					</figure>
				)
			},
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			[BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => {
				return <p className='mb-4 leading-6'>{children}</p>
			},
		},
	}
	if (!document) {
		return null
	}

	return <>{documentToReactComponents(document, options)}</>
}

export default RichText