import { CardPost } from './../../interfaces/card-post.interface';

export const mockCardsPost: CardPost[] = [
  {
    datePost: new Date(),
    idPost: 0,
    subTitle: 'subtitulo',
    tags: [{ name: 'angular' }],
    title: 'titulo',
    urlImage: 'utlImagem',
  },
];
