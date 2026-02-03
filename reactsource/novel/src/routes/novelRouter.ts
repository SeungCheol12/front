import { Component } from 'react';
import AddNovel from '../pages/novels/AddNovel';
import EditNovel from '../pages/novels/EditNovel';
import NovelDetail from '../components/novels/NovelDetail';
import NovelDetails from '../pages/novels/NovelDetails';

export const novelRouter = () => {
  return [
    {
      path: 'add',
      Component: AddNovel,
    },
    {
      path: 'edit/:id',
      Component: EditNovel,
    },
    {
      path: ':id',
      Component: NovelDetails,
    },
  ];
};
