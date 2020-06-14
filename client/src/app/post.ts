// export interface Post {
//   title: string,
//   shortContent: string,
//   longContent: string,
//   id: string,
// }

type Post = {
  title: string,
  shortContent: string,
  longContent: string,
  id: string,
  imgName?: string,
}

const postData: Array<Post> = [
  {
    title: 'Post title 1',
    shortContent: 'shortContent 1',
    longContent: 'longContent 1',
    id: '1',
    imgName: 'pic01',
  },
  {
    title: 'Post title 2',
    shortContent: 'shortContent 2',
    longContent: 'longContent 2',
    id: '2',
    imgName: 'pic02',
  },
  {
    title: 'Post title 3',
    shortContent: 'shortContent 3',
    longContent: 'longContent 3',
    id: '3',
    imgName: 'pic03',
  },
  {
    title: 'Post title 4',
    shortContent: 'shortContent 4',
    longContent: 'longContent 4',
    id: '4',
    imgName: 'pic04',
  },
  {
    title: 'Post title 5',
    shortContent: 'shortContent 5',
    longContent: 'longContent 5',
    id: '5',
    imgName: 'pic05',
  },
];

export {Post, postData};
