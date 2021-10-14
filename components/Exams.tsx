import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { blue } from '../utils/consts';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import DefaultLoadingScreen from '../utils/componentsUtils';
import { exams } from '../db/exams';
import { Exams } from '../utils/interfaces';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
  },
});

const Exam = ({ text }) => {
  const [fontsLoaded] = useFonts({ Poppins_400Regular });

  return fontsLoaded ? (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.text}>{text}</Text>
      </ScrollView>
    </View>
  ) : (
    <DefaultLoadingScreen />
  );
};

function generateExams(): Exams[] {
  let res: Exams[] = [];
  exams.forEach(exam =>
    res.push({
      title: exam.title,
      component: <Exam text={exam.content} />,
    })
  );
  return res;
}

function getExamsNames(): string[] {
  let res: string[] = [];
  exams.forEach(exam => res.push(exam.title));
  return res;
}

export const ExamsList: Exams[] = generateExams();
export const ExamsNames: string[] = getExamsNames();
