import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">植物監控APP</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.introContainer}>
        <ThemedText type="subtitle">應用程式簡介</ThemedText>
        <ThemedText>
          歡迎使用植物生長環境監控APP！本應用程式幫助您監控植物的生長環境，包括溫度、濕度、光照等數據，確保您的植物健康成長。
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  introContainer: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
