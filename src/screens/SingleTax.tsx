import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { SingleTaxScreenProps } from 'navigation';
import { useTranslation } from 'react-i18next';
import { BaseTopNavigation } from 'components';

const SingleTax: React.FC<SingleTaxScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <Layout style={styles.layout}>
        <BaseTopNavigation title={t('single-tax')} onPress={() => navigation.navigate('start-menu')} />
        <Text>Content</Text>
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
});

export default SingleTax;