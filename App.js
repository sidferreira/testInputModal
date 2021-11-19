/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Modal from 'react-native-modal';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Keyboard,
  Platform,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const inputRef = React.useRef();
  const [showModal, setShowModal] = React.useState(true);
  const [showInput, setShowInput] = React.useState(false);

  React.useEffect(() => {
    if (showInput && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 30);
    }
  }, [showInput]);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{flex: 1}}>
          <View style={{borderWidth: 30, borderColor: 'green'}}>
            {showInput ? (
              <TextInput
                ref={inputRef}
                autoFocus={Platform.select({ios: true, android: undefined})}
                style={{borderWidth: 1, borderColor: 'red'}}
              />
            ) : null}
            {!showModal ? (
              <Text
                onPress={() => {
                  setShowModal(true);
                  setShowInput(false);
                }}>
                Press to Open Modal
              </Text>
            ) : null}
          </View>
        </View>
        <Modal
          isVisible={showModal}
          onModalHide={() => {
            setShowInput(true);
          }}>
          <View style={{flex: 1, backgroundColor: 'white', padding: 30}}>
            <Text
              onPress={() => {
                setShowModal(false);
              }}>
              Press to Edit
            </Text>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
