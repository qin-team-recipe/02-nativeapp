import {
  RecommendChefPropsType,
  RecommendRecipePropsType,
} from "@/components/Card"

export const chefDummyData: Omit<RecommendChefPropsType, "imgSize">[] = [
  {
    image: "https://wallpaperaccess.com/full/317501.jpg",
    title: "チーム２シェフ",
    firstName: "チーム２",
    lastName: "シェフ",
    recommend:
      "私は素晴らしい料理の鉄人です私は素晴らしい料理の鉄人です私は素晴らしい料理の鉄人です私は素晴らしい料理の鉄人です私は素晴らしい料理の鉄人です私は素晴らしい料理の鉄人です",
    recipeCount: 100,
  },
  {
    image: "https://wallpaperaccess.com/full/317501.jpg",
    title: "チーム２シェフ",
    firstName: "チーム２",
    lastName: "シェフ",
    recommend: "私は素晴らしい料理の鉄人です",
    recipeCount: 100,
  },
  {
    image: "https://wallpaperaccess.com/full/317501.jpg",
    title: "チーム２シェフ",
    firstName: "チーム２",
    lastName: "シェフ",
    recommend: "私は素晴らしい料理の鉄人です",
    recipeCount: 100,
  },
  {
    image: "https://wallpaperaccess.com/full/317501.jpg",
    title: "チーム２シェフ",
    firstName: "チーム２",
    lastName: "シェフ",
    recommend: "私は素晴らしい料理の鉄人です",
    recipeCount: 100,
  },
  {
    image: "https://wallpaperaccess.com/full/317501.jpg",
    title: "チーム２シェフ",
    firstName: "チーム２",
    lastName: "シェフ",
    recommend: "私は素晴らしい料理の鉄人です",
    recipeCount: 100,
  },
]

export const recipesDummyData: Omit<RecommendRecipePropsType, "imgSize">[] = [
  {
    image: "/assets/dummy-images/topRecipe1.jpg",
    title:
      "チーム２レシピのタイトル1111111111111111111111111111111のタイトル1111111111111111111111111111111のタイトル1111111111111111111111111111111",
    text: "チーム２レシピの本文1111111111111111111111111111111111111111",
    chef: "チーム２シェフ",
    good: 100,
    comment: 100,
  },
  {
    image: "/assets/dummy-images/topRecipe1.jpg",
    title: "チーム２レシピ",
    text: "チーム２レシピの本文",
    chef: "チーム２シェフ",
    good: 100,
    comment: 100,
  },
  {
    image: "/assets/dummy-images/topRecipe1.jpg",
    title: "チーム２レシピ",
    text: "チーム２レシピの本文",
    chef: "チーム２シェフ",
    good: 100,
    comment: 100,
  },
  {
    image: "/assets/dummy-images/topRecipe1.jpg",
    title: "チーム２レシピ",
    text: "チーム２レシピの本文",
    chef: "チーム２シェフ",
    good: 100,
    comment: 100,
  },
]
