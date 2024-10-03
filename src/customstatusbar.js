import React from 'react';
import { StatusBar, View } from 'react-native';

const CustomStatusBar = ({ barStyle, marginBottom  }) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={barStyle || 'dark-content'}
      />
      {/* Inline styling for margin */}
      
    </>
  );
};

export default CustomStatusBar;
