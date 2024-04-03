import {StyleSheet, Text, View} from 'react-native';
import JoinCard from '../../../../.storybook/stories/JoinCard/JoinCard';
import {colors} from '../../../theme';
import {Event} from '../../../interface/models';
import useDateFormat from '../../../hook/useDateFormat';

const Badge = () => {
  return (
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>LIVE</Text>
    </View>
  );
};

const Card = ({data}: {data: Event}) => {
  const {formater} = useDateFormat();

  return (
    <JoinCard
      key={data.event_id}
      isLive={false}
      bage={<Badge />}
      containerStyle={{marginHorizontal: 30, marginVertical: 15}}
      titleStyle={{fontSize: 18}}
      title={data.event_title}
      likes={90}
      joined={data.counter ?? 0}
      joinedDate={formater(data.time_stamp, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })}
    />
  );
};

const styles = StyleSheet.create({
  badgeText: {
    color: colors.color_400,
    paddingHorizontal: 5,
  },
  badgeContainer: {
    backgroundColor: colors.color_100,
    padding: 5,
    borderRadius: 5,
  },
});

export default Card;
