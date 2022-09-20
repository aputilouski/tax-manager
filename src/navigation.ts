import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  'start-menu': undefined;
  'single-tax': undefined;
  'simplified-taxation-system': undefined;
};

export type StartMenuScreenProps = NativeStackScreenProps<RootStackParamList, 'start-menu'>;
export type SingleTaxScreenProps = NativeStackScreenProps<RootStackParamList, 'single-tax'>;
export type SimplifiedTaxationSystemScreenProps = NativeStackScreenProps<RootStackParamList, 'simplified-taxation-system'>;
