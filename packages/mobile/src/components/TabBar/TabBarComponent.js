import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '../../theme/index.json';

import * as S from './TabBarComponent.style';

const TabBarComponent = ({ navigation }) => {
  const handleCreate = () => {
    navigation.navigate('createTarget');
  };

  return (
    <>
      <S.TabBarContainer>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('home')}>
          <S.Button>
            <Ionicons name="md-home" color={colors.secoundColor} size={30} />
          </S.Button>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('week')}>
          <S.Button>
            <MaterialCommunityIcons
              name="target"
              color={colors.secoundColor}
              size={35}
            />
          </S.Button>
        </TouchableWithoutFeedback>
        <S.BassoButtonContainer>
          <TouchableWithoutFeedback onPress={handleCreate}>
            <S.BassoButton>
              <S.PlusIcon
                name="plussquare"
                color={colors.primaryColor}
                size={35}
              />
            </S.BassoButton>
          </TouchableWithoutFeedback>
        </S.BassoButtonContainer>
      </S.TabBarContainer>
    </>
  );
};

export default TabBarComponent;
