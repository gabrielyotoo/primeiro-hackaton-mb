import React, { useState } from 'react';
import { Linking } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import { colors } from '../../theme/index.json';
import * as SnackBar from '../../services/snackBar';

import * as S from './CommentComponent.style';

const CommentComponent = ({ id, user, comment, link }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleShowLink = () => {
    if (!link) return;
    if (clickCount === 1) {
      Linking.openURL(link);
      setClickCount(0);

      return;
    }
    setClickCount(1);
    setTimeout(() => {
      setClickCount(0);
    }, 5000);
    SnackBar.message(`Pressione novamente para abrir ${link.split('//')[1]}`);
  };

  const handleOpenLink = () => {
    if (!link) return;
    Linking.openURL(link);
  };

  return (
    <S.WrapperComments
      onPress={handleShowLink}
      onLongPress={handleOpenLink}
      key={id}
    >
      <S.TextsContainer>
        <S.CommentsName bold>{user.name} comentou:</S.CommentsName>
        <S.CommentsName>{comment}</S.CommentsName>
      </S.TextsContainer>
      {link && <Feather name="link" color={colors.primaryText} size={20} />}
    </S.WrapperComments>
  );
};

export default CommentComponent;
