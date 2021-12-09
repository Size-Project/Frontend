import React from 'react';
import AppLayout from '../app.layout';
import ScreenCategory from '../app.feature/Category/screen/ScreenCategory';
import { useSelector } from 'react-redux';

const PageCategory = () => {
  const params = new URLSearchParams(window.location.search);
  const categoryId = params.get('id');

  return (
    <AppLayout>
      <ScreenCategory categoryId={categoryId} />
    </AppLayout>
  );
};

export default PageCategory;
