export interface IArticle {
  "id": number
  "featured": boolean
  "title": string
  "url": string
  "imageUrl": string
  "newsSite": string
  "summary": string
  "publishedAt": string
}

export interface ICardProps {
  id?: number
  img: string
  title: string
	cardText?: string
	date?: string
	postRead?: string
	author?: string
}