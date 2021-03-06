import { ICountries } from 'react-native-phonecode-picker/src/resources/countries';
import { IFlags } from 'react-native-phonecode-picker/src/resources/flags';
import React, { FC } from 'react';

declare module 'react-native-phonecode-picker' {

    export class PhoneSearch extends React.Component<{
        serchString: string;
        onChangeText: (text: string) => void;
        placeholder?: string;
    }> { };

    interface PhoneListProps {
        language: 'ru' | 'es' | 'en' | 'uk' | 'ar';
        isSearch?: boolean;
        onPress: (country: { countryName: string; phcode: string; key: string; mask: string; }) => void;
        containerStyle?: object;
        itemContainerStyle?: object;
        textStyle?: object;
        testID?: string;
        placeholder?: string;
    }

    export class PhoneList extends React.Component<PhoneListProps> { }

    export class PhoneItem extends React.Component<{
        country: { countryName: string; phcode: string; key: string; };
        flag: any;
        testID: string;
        onPress: (country: { countryName: string; phcode: string; key: string; mask: string; }) => void;
        itemContainerStyle?: object;
        textStyle?: object;
    }> { };

    interface IPhoneInput {
        country: { countryName: string; phcode: string; key: string; mask: string; };
        value: string;
        onPress: () => void;
        onChangeText: (text: string) => void;
        style?: {
            container?: object,
            textInput?: object,
            placeholderTextColor?: string,
        };
        autoFocus?: boolean;
        testID?: string;
        placeholder?: string;
        onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void | undefined;
        onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void | undefined;
    }

    export const PhoneInput: FC<IPhoneInput> = (props: IPhoneInput) => { };

    export const Flags: IFlags;

    export const Countries: ICountries;
};
