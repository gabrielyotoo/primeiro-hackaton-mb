import React, { useState } from 'react';
import { Keyboard, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';

import { postComment, getGoalDetails } from '../../redux/actions/goalActions';
import * as SnackBar from '../../services/snackBar';
import { colors } from '../../theme/index.json';

import * as S from './PostCommentComponent.style';

const PostCommentComponent = ({ goalId }) => {
  const [comment, setComment] = useState('');
  const [willSendLink, setWillSendLink] = useState(false);
  const [link, setLink] = useState('');
  const dispatch = useDispatch();

  const handlePostComment = () => {
    Keyboard.dismiss();
    if (link.trim() === '' && willSendLink) {
      SnackBar.message('Link inválido');

      return;
    }
    dispatch(
      postComment(
        { comment, goalId, link: willSendLink ? `https://${link}` : undefined },
        (err) => {
          if (err) {
            SnackBar.message(err);
          } else {
            dispatch(
              getGoalDetails(goalId, (err) => {
                if (err) {
                  SnackBar.message(err);
                }
              })
            );
          }
        }
      )
    );
  };

  const handleAddLink = () => {
    Keyboard.dismiss();
    setWillSendLink(!willSendLink);
  };

  return (
    <>
      <S.Container willSendLink={willSendLink}>
        <S.Input
          value={comment}
          onChangeText={setComment}
          placeholder="Publicar novo comentário"
        />
        <S.ButtonsContainer>
          <TouchableOpacity onPress={handleAddLink}>
            <Feather name="link" size={20} color={colors.primaryText} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePostComment}>
            <Ionicons name="send" size={20} color={colors.primaryText} />
          </TouchableOpacity>
        </S.ButtonsContainer>
      </S.Container>
      {willSendLink && (
        <S.Container link>
          <S.Text>https://</S.Text>
          <S.Input
            link
            autoCapitalize="none"
            value={link}
            onChangeText={setLink}
          />
        </S.Container>
      )}
    </>
  );
};

export default PostCommentComponent;
