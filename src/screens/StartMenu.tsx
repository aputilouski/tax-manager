import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout } from '@ui-kitten/components';
import { StartMenuProps } from 'navigation';
import { useTranslation } from 'react-i18next';

const StartMenu: React.FC<StartMenuProps> = ({ navigation }) => {
  const { t } = useTranslation();

  const navigateDetails = () => {
    // navigation.navigate('Details');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button style={{ margin: 8, width: '80%' }}>{t('single-tax')}</Button>
        <Button style={{ margin: 8, width: '80%' }}>{t('simplified-taxation-system')}</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default StartMenu;
