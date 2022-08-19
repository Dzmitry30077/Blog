export interface IArticle {
  id: number
  featured: boolean
  title: string
  url: string
  imageUrl: string
  newsSite: string
  summary: string
  publishedAt: string
}

export interface ICardProps {
  id?: number
  link: string
  img: string
  title: string
	cardText?: string
	date?: string
	postRead?: string
	author?: string
}

export interface IPageTitle {
  text?: string
}

export interface ICardBlock {
  limit: number
}

export interface IArticlesParams {
  limit: number
  page: number | string
  search?: string
  sort?: string | null
}