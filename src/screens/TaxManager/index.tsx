import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Layout, IndexPath, Select, SelectItem, Button, ButtonGroup, Icon } from '@ui-kitten/components';
import { Fab, BaseTopNavigation } from 'components';
import { TaxManagerScreenProps } from 'navigation';
import { useTranslation } from 'react-i18next';

const TaxManager: React.FC<TaxManagerScreenProps> = ({ route, navigation }) => {
  const { t } = useTranslation();

  const { title, type } = route.params;

  // const [quarter, setQuarter] = React.useState<1 | 2 | 3 | 4>(1);
  const [year, setYear] = React.useState<IndexPath | IndexPath[]>(new IndexPath(0));

  return (
    <SafeAreaView style={styles.fullScreen}>
      <Layout style={styles.fullScreen}>
        <BaseTopNavigation title={title} onPress={() => navigation.navigate('start-menu')} />

        <View style={styles.controlBox}>
          <View>
            <Text style={styles.title}>{t('quarter')}</Text>
            <ButtonGroup>
              <Button disabled>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>4</Button>
            </ButtonGroup>
          </View>
          <Select //
            style={styles.select}
            label={() => <Text style={styles.title}>{t('year')}</Text>}
            selectedIndex={year}
            onSelect={index => setYear(index)}>
            <SelectItem title="2021" />
            <SelectItem title="2022" />
            <SelectItem title="2023" />
          </Select>
        </View>

        <Text>Content</Text>

        <Fab //
          style={[styles.fab, styles.fabLeft]}
          accessoryLeft={<Icon name="description" />}
        />

        <Fab //
          style={[styles.fab, styles.fabRight]}
          accessoryLeft={<Icon name="add" />}
        />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fullScreen: { flex: 1 },
  title: {
    fontSize: 18,
  },
  controlBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
  },
  select: { width: 120 },
  fab: { position: 'absolute', bottom: 0 },
  fabLeft: { left: 0 },
  fabRight: { right: 0 },
});

export default TaxManager;
