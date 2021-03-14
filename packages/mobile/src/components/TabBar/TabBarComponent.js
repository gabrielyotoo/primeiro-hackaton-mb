import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '../../theme/index.json';

import * as S from './TabBarComponent.style';

const TabBarComponent = () => {
  const handleCreate = () => {};

  return (
    <>
      <S.TabBarContainer>
        <S.Button>
          <Ionicons name="md-home" color={colors.secoundColor} size={30} />
        </S.Button>
        <S.Button>
          <MaterialCommunityIcons
            name="target"
            color={colors.secoundColor}
            size={35}
          />
        </S.Button>
        <S.BassoButtonContainer>
          <TouchableWithoutFeedback onPress={handleCreate}>
            <S.BassoButton>
              <S.PlusIcon name="md-add" color={colors.primaryColor} size={40} />
            </S.BassoButton>
          </TouchableWithoutFeedback>
        </S.BassoButtonContainer>
      </S.TabBarContainer>
    </>
  );
};

export default TabBarComponent;
