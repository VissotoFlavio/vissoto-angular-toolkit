export interface CardPost {
  idPost: number;
  datePost: Date;
  title: string;
  subTitle: string;
  tags: TagPost[];
  urlImage: string;
}

export interface TagPost {
  name: string;
}
