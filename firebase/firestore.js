import app from "./initFireBase.js";

import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
  where,
  query,
} from "firebase/firestore";

const db = getFirestore(app);

//User table queries

async function addNewUser(userId, username, dueDate) {
  await setDoc(doc(db, "users", userId), {
    userId,
    username,
    dueDate,
  });
}

async function getUserById(userId) {
  let user = await getDoc(doc(db, "users", userId));
  return user.data();
}

//Article table queries

async function addNewArticle(articleObj) {
  await addDoc(collection(db, "articles"), articleObj);
}

async function getArticlesByKeyword(keyword) {
  const colRef = collection(db, "articles");
  let articlesCollection = await getDocs(colRef);
  let articlesWithArticleIDsAdded = [];
  articlesCollection.forEach((snap) => {
    if (
      snap.data().content.includes(keyword) ||
      snap.data().title.includes(keyword)
    ) {
      articlesWithArticleIDsAdded.push({
        ...snap.data(),
        articleId: snap.id,
      });
    }
  });
  return articlesWithArticleIDsAdded;
}

async function getArticlesByTrimester(trimesterNum) {
  const articlesRef = collection(db, "articles");
  const q = query(
    articlesRef,
    where("trimesterRelated", "array-contains", trimesterNum)
  );
  let filteredArticlesByTrimester = [];
  let articleQueryResult = await getDocs(q);
  articleQueryResult.forEach((snap) => {
    filteredArticlesByTrimester.push(snap.data());
  });
  return filteredArticlesByTrimester;
}

async function getArticlesByTopic(topic) {
  const articlesRef = collection(db, "articles");
  const q = query(articlesRef, where("topic", "array-contains", topic));
  let filteredArticlesByTopic = [];
  let articleQueryResult = await getDocs(q);
  console.log("hi");

  articleQueryResult.forEach((snap) => {
    filteredArticlesByTopic.push(snap.data());
  });

  return filteredArticlesByTopic;
}

async function updateArticle(
  articleId,
  { author, content, title, trimesterRelated, topic, resources, media }
) {
  const articleRef = doc(db, "articles", articleId);
  author && (await updateDoc(articleRef, { author }));
  content && (await updateDoc(articleRef, { content }));
  title && (await updateDoc(articleRef, { title }));
  trimesterRelated && (await updateDoc(articleRef, { trimesterRelated }));
  topic && (await updateDoc(articleRef, { topic }));
  resources && (await updateDoc(articleRef, { resources }));
  media && (await updateDoc(articleRef, { media }));
}

async function deleteArticle(articleId) {
  await deleteDoc(doc(db, "articles", articleId));
}

//Babysize table

async function addBabySize(weekNum, description, imgSrc, alt, weight) {
  await setDoc(doc(db, "babySize", weekNum), {
    description,
    imgSrc,
    alt,
    weight,
  });
}

async function getBabySizeByWeek(weekNum) {
  let week = await getDoc(doc(db, "babySize", weekNum));
  return week.data();
}

async function updateBabySize(weekNum, { description, imgSrc, alt, weight }) {
  const babySizeRef = doc(db, "babySize", weekNum);
  description && (await updateDoc(babySizeRef, { description }));
  imgSrc && (await updateDoc(babySizeRef, { imgSrc }));
  alt && (await updateDoc(babySizeRef, { alt }));
  weight && (await updateDoc(babySizeRef, { weight }));
}

//FAQ table

async function addFAQ(question, answer) {
  await addDoc(collection(db, "FAQs"), {
    question,
    answer,
    createdAt: new Date().getTime(),
  });
}

async function getAllFAQs() {
  const colRef = collection(db, "FAQs");
  let faqsCollection = await getDocs(colRef);
  let faqs = [];
  faqsCollection.forEach((snap) => {
    faqs.push({
      ...snap.data(),
      faqId: snap.id,
    });
  });
  return faqs;
}

async function updateFAQ(faqId, { question, answer }) {
  const faqRef = doc(db, "FAQs", faqId);
  question && (await updateDoc(faqRef, { question }));
  answer && (await updateDoc(faqRef, { answer }));
}

async function deleteFAQ(faqId) {
  await deleteDoc(doc(db, "FAQs", faqId));
}

export {
  db,
  addNewUser,
  getUserById,
  addNewArticle,
  getArticlesByTopic,
  getArticlesByTrimester,
  getArticlesByKeyword,
  addBabySize,
  getBabySizeByWeek,
  addFAQ,
  getAllFAQs,
  deleteFAQ,
  deleteArticle,
  updateBabySize,
  updateFAQ,
  updateArticle,
};
