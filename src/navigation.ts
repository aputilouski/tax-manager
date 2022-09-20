import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  'start-menu': undefined;
  'tax-manager': { title: string; type: string };
};

export type StartMenuScreenProps = NativeStackScreenProps<RootStackParamList, 'start-menu'>;
export type TaxManagerScreenProps = NativeStackScreenProps<RootStackParamList, 'tax-manager'>;
