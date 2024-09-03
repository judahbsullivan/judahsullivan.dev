export interface Globals {
  meta?: Meta
  navigation?: Navigation
  footer?: Footer
}

export interface Author {
  first_name?: string;
  last_name: string;
  location: string;
  title: string;
  avatar: string;

}

export interface HeroBlock {
  title?: string;
  description?: string;
  image?: string;
  author?: Author
  tags?: Tags[]
}

export interface Blocks {
  id?: string;
  collection?:
  | "block_hero"
  | "block_articles_list"
  | "block_projects_list";
  item?: any;
}

export interface Tags {
  tag?: string;
}



export interface Meta {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  url?: string;
  twitterCard?: {
    title?: string;
    description?: string;
    ogImage?: string;
  }
  openGraph?: {
    title?: String;
    description?: string;
    ogImage?: string;
  }
}

export interface BlockArticlesList {
  list_articles?: Articles[];
}

export interface BlockProjectsList {
  list_articles?: Projects[];
}


export interface Articles {
  title?: string;
  description?: string;
  cover_image?: string;
  date_created?: string;
  date_updated?: string;
  slug?: string;
  content?: any
  tags?: string[];
  author?: Author
}




export interface Navigation {
  page_links?: Array<{
    links?: string;
    name?: string;
  }>
}

export interface Footer {
  page_links?: Array<{
    links?: string;
    name?: string;
  }>
  social_links?: Array<{
    links?: string;
    name?: string;
  }>
}


export interface Page {
  title?: string;
  slug?: string;
  description?: string;
  blocks?: Blocks[];
}


export interface Projects {
  title?: string;
  slug?: string;
  cover_image?: string;
  date_created?: string;
  date_updated?: string;
  description?: string;
  tags?: string[];
  author?: Author
}



export interface DirectusInterface {
  globals?: Globals
  pages?: Page[];
  page_blocks?: Blocks[];
  projects?: Projects[];
  articles?: Articles[];
}
