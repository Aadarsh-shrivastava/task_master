import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {Children, ReactNode} from 'react';
import useAccordion from '../hooks/useAccordion';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
interface AccordionProps {
  title: String;
  children: ReactNode;
  style?: ViewStyle;
}
const Accordion = ({title, children, style}: AccordionProps) => {
  const {isExpanded, toggleExpand, animation} = useAccordion();

  const animatedHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1000],
  });
  return (
    <View style={[style, styles.container]}>
      <TouchableOpacity onPress={toggleExpand} style={styles.header}>
        <MaterialIcon
          name={!isExpanded ? 'arrow-right' : 'arrow-drop-down'}
          size={24}
        />
        <Text>{title}</Text>
      </TouchableOpacity>

      {isExpanded && <View style={{height: animatedHeight}}>{children}</View>}
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    overflow: 'hidden',
  },
  header: {flexDirection: 'row', alignItems: 'center'},
  content: {
    padding: 10,
    overflow: 'hidden',
  },
});
