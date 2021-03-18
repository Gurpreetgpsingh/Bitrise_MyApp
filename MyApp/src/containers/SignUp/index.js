import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Style from './style';
import {goBack} from '../../../navigation/NavigationService';
import crashlytics from '@react-native-firebase/crashlytics';
class SignUp extends React.PureComponent {
  onCrossPress = () => {
    crashlytics().crash();
    goBack();
  };
  render() {
    return (
      <View style={Style.constainer}>
        <TouchableOpacity onPress={this.onCrossPress}>
          <FontAwesome name="times" size={36} style={{color: '#4A4A4A'}} />
        </TouchableOpacity>
        <Text style={Style.textStyle}>Signup Screen</Text>
      </View>
    );
  }
}
export default SignUp;
