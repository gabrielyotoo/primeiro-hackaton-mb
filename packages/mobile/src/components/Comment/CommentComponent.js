import React from 'react';

import * as S from './CommentComponent.style';

const CommentComponent = ({ id, user, comment, link }) => (
  <S.WrapperComments key={id}>
    <S.CommentsName bold>{user.name} comentou:</S.CommentsName>
    <S.CommentsName>{comment}</S.CommentsName>
  </S.WrapperComments>
);

export default CommentComponent;
