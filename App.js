import React from 'react';
import { StyleSheet, Image, Text, View, ScrollView, TextInput, FlatList } from 'react-native';

const categories = [
  { name: 'Exercise', tasks: 12, imageUri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/yenajbis4sj-2%3A5?alt=media&token=b3e31957-2b70-4bf2-b517-37dc04505aae' },
  { name: 'Study', tasks: 12, imageUri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/yenajbis4sj-2%3A16?alt=media&token=044c0378-28a9-4907-9aa2-dd5aa5e6a2ca' },
  { name: 'Code', tasks: 8, imageUri: 'https://example.com/code-image' },
  { name: 'Cook', tasks: 5, imageUri: 'https://example.com/cook-image' },
  { name: 'Read', tasks: 10, imageUri: 'https://example.com/read-image' },
  { name: 'Clean', tasks: 7, imageUri: 'https://example.com/clean-image' },
  { name: 'Meditate', tasks: 4, imageUri: 'https://example.com/meditate-image' },
  { name: 'Shop', tasks: 3, imageUri: 'https://example.com/shop-image' },
];

const ongoingTasks = [
  { key: '1', title: 'Mobile App Development' },
  { key: '2', title: 'Web Development' },
  { key: '3', title: 'Push Ups' },
  { key: '4', title: 'Learn React Native' },
  { key: '5', title: 'Grocery Shopping' },
  { key: '6', title: 'Clean the House' },
  { key: '7', title: 'Finish Homework' },
  { key: '8', title: 'Read a Book' },
  { key: '9', title: 'Meditate' },
  { key: '10', title: 'Cook Dinner' },
  { key: '11', title: 'Exercise' },
  { key: '12', title: 'Write a Blog Post' },
  { key: '13', title: 'Learn a New Recipe' },
  { key: '14', title: 'Organize Workspace' },
  { key: '15', title: 'Practice Yoga' },
];

export default function Task() {
  return (
    <ScrollView style={styles.Task}>
      <View style={styles.Header}>
        <View style={styles.Profile}>
          <Text style={styles.HelloDevs}>Hello, Devs</Text>
          <Text style={styles.TasksToday}>14 tasks today</Text>
        </View>
        <Image
          style={styles.ProfileImage}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/yenajbis4sj-1%3A13?alt=media&token=5665282e-63eb-4e15-86ff-6a714db842de',
          }}
        />
      </View>
      <View style={styles.SearchContainer}>
        <View style={styles.SearchBox}>
          <Image
            style={styles.SearchIcon}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/yenajbis4sj-1%3A40?alt=media&token=c631004c-6e3b-42b9-9a3a-6c86364a32b4',
            }}
          />
          <TextInput style={styles.SearchInput} placeholder="Search" />
        </View>
        <Image
          style={styles.FilterIcon}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/yenajbis4sj-1%3A31?alt=media&token=c8104069-f650-41f3-b592-8024aa8d80d9',
          }}
        />
      </View>
      <Text style={styles.Categories}>Categories</Text>
      <ScrollView horizontal style={styles.CategoriesContainer}>
        {categories.map((category, index) => (
          <View key={index} style={styles.CategoryCard}>
            <View style={styles.CategoryTextContainer}>
              <Text style={styles.CategoryName}>{category.name}</Text>
              <Text style={styles.CategoryTasks}>{category.tasks} Tasks</Text>
            </View>
            <Image style={styles.CategoryImage} source={{ uri: category.imageUri }} />
          </View>
        ))}
      </ScrollView>
      <Text style={styles.OngoingTasksTitle}>Ongoing Task</Text>
      <FlatList
        data={ongoingTasks}
        renderItem={({ item }) => (
          <View style={styles.OngoingTaskCard}>
            <Text style={styles.OngoingTaskText}>{item.title}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Task: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(247,240,232,1)',
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  Profile: {
    flexDirection: 'column',
  },
  HelloDevs: {
    fontSize: 32,
    fontWeight: '700',
    color: 'rgba(0,0,0,1)',
  },
  TasksToday: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(0,0,0,1)',
  },
  ProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  SearchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  SearchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(251,249,247,1)',
    borderRadius: 14,
    padding: 10,
    flex: 1,
    marginRight: 10,
  },
  SearchIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  SearchInput: {
    flex: 1,
  },
  FilterIcon: {
    width: 24,
    height: 24,
  },
  Categories: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(0,0,0,1)',
    marginBottom: 10,
  },
  CategoriesContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  CategoryCard: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(251,249,247,1)',
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
  },
  CategoryTextContainer: {
    marginBottom: 10,
  },
  CategoryName: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(0,0,0,1)',
  },
  CategoryTasks: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(0,0,0,1)',
  },
  CategoryImage: {
    width: 151,
    height: 132,
  },
  OngoingTasksTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(0,0,0,1)',
    marginBottom: 10,
  },
  OngoingTaskCard: {
    backgroundColor: 'rgba(251,249,247,1)',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
  },
  OngoingTaskText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(0,0,0,1)',
  },
});
