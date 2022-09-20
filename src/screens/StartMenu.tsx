import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Layout } from '@ui-kitten/components';
import { StartMenuScreenProps } from 'navigation';
import { useTranslation } from 'react-i18next';

const StartMenu: React.FC<StartMenuScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <Layout style={styles.layout}>
        <Button //
          onPress={() => navigation.navigate('tax-manager', { title: t('single-tax'), type: 's' })}
          style={styles.button}>
          {t('single-tax')}
        </Button>
        <Button //
          onPress={() => navigation.navigate('tax-manager', { title: t('simplified-taxation-system'), type: 'sts' })}
          style={styles.button}>
          {t('simplified-taxation-system')}
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 8,
    width: '80%',
  },
});

export default StartMenu;
