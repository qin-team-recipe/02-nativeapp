import useSWR from "swr"

import { fetcher as defaultFetcher } from "../"
import { API_URL } from "../../../constants"
import { PageInfo, SWRResult } from "../type"
import { Chef } from "./useGetChefs"
import { useEffect, useState } from "react"

export type User = {
  id: number
  screen_name: string
  display_name: string
  email: string
}

export type RecipesForGet = {
  message: string
  data: {
    lists: Recipe[]
    page_info: PageInfo
  }
}
export type Recipe = {
  id: number
  watch_id: string
  title: string
  description: string
  servings: number
  is_draft: boolean
  published_status: string
  favorites_count: number
  chef?: Chef
  user?: User
}

// export const useGetRecipes = (
//   searchText?: string | undefined
//   //fetcher?: (input: RequestInfo, init?: RequestInit) => any | undefined
// ): SWRResult<RecipesForGet> => {
//   const query = searchText ? `?q=${searchText}` : ""
//   const { data, error } = useSWR(
//     `${API_URL}/recipes${query}`
//     //fetcher || defaultFetcher
//   )
//   }, 1000)
//   return {
//     data,
//     error,
//     isLoading: !error && !data,
//     isEmpty: data && data.data.lists.length === 0,
//   }
// }
export const useGetRecipes = (searchText?: string | undefined) => {
  const [data, setData] = useState<RecipesForGet>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error>()
  const [isEmpty, setIsEmpty] = useState<boolean>(false)

  const filterRecipesByKeyword = (searchText?: string) => {
    if (!searchText) {
      return dummyRecipes
    }
    const filteredLists = dummyRecipes.data.lists.filter((recipe) => {
      return (
        recipe.title.includes(searchText) ||
        recipe.description.includes(searchText)
      )
    })
    return {
      message: dummyRecipes.message,
      data: {
        lists: filteredLists,
        page_info: dummyRecipes.data.page_info,
      },
    }
  }

  useEffect(() => {
    setTimeout(() => {
      const filteredDummyRecipes = filterRecipesByKeyword(searchText)
      setData(filteredDummyRecipes)
      setIsLoading(false)
      //setError(new Error("dummy"))
      //setIsEmpty(true)
    }, 1000)
  }, [searchText])

  return {
    data,
    isLoading,
    error,
    isEmpty: data && data.data.lists.length === 0,
  }
}

const dummyRecipes: RecipesForGet = {
  message: "success",
  data: {
    lists: [
      {
        id: 1,
        watch_id: "xxx1",
        title: "中華風！肉とオクラとトマトの甘酢炒め",
        description:
          "お酢をたっぷり使って味わえるとっておきのレシピです。オクラの粘りが豚肉と絡まって、白いご飯と食べたら止まらない一品です。モリモリ食べて暑い夏を乗りきりましょう！彩りも良く見栄えも鮮やかなのでぜひお試しください！",
        servings: 2,
        is_draft: false,
        published_status: "public",
        favorites_count: 2,
        chef: {
          id: 1,
          screen_name: "yamadachef",
          display_name: "山田シェフ",
          description:
            "初の絵本出版！『まねっこシェフ』・ふわふわ！スクランブルエッグ・にぎにぎ！おにぎり主婦の友社より３月３日、２冊同時発売！絶賛発売中！",
          recipes_count: 0,
          follows_count: 0,
          is_following: false,
          chef_links: null,
        },
      },
      {
        id: 7,
        watch_id: "xxx7",
        title: "ツナ缶で簡単 やみつき無限ピーマン",
        description:
          "ピーマンを使った副菜のご紹介です。ピーマンをさっと湯通しすると甘みが引き立って、しゃきしゃきと食感のよい仕上がりになります。ツナを合わせれば、シンプルな味つけでお箸が止まらない、やみつきになる一品になりますよ。ぜひ作ってみてくださいね。",
        servings: 4,
        is_draft: false,
        published_status: "public",
        favorites_count: 0,
        chef: {
          id: 2,
          screen_name: "suzukichef",
          display_name: "鈴木シェフ",
          description: "初の雑誌連載開始！『料理日和』絶賛発売中！",
          recipes_count: 0,
          follows_count: 0,
          is_following: false,
          chef_links: null,
        },
      },
      {
        id: 6,
        watch_id: "xxx6",
        title: "濃厚 かぼちゃプリンタルト",
        description:
          "たっぷりのホイップクリームで飾った、濃厚なかぼちゃプリンタルトはいかがでしょうか。さっくりとしたタルト生地と優しい甘さのかぼちゃプリン、なめらかなホイップクリームが相性抜群の一品です。おもてなしのスイーツにもおすすめなので、ぜひお試しくださいね。",
        servings: 4,
        is_draft: false,
        published_status: "public",
        favorites_count: 0,
        chef: {
          id: 2,
          screen_name: "suzukichef",
          display_name: "鈴木シェフ",
          description: "初の雑誌連載開始！『料理日和』絶賛発売中！",
          recipes_count: 0,
          follows_count: 0,
          is_following: false,
          chef_links: null,
        },
      },
      {
        id: 5,
        watch_id: "xxx5",
        title: "ほくほくかぼちゃの甘煮",
        description:
          "素材の甘味を生かした、簡単に出来る、ほくほくのかぼちゃの煮付けです。レンジ加熱してから煮ることで、煮る時間を短縮することができます。優しい味付けで、どこかホッとする美味しさです。時短レシピなので、忙しい時にぴったりです。ぜひお試しください。",
        servings: 3,
        is_draft: false,
        published_status: "public",
        favorites_count: 2,
        chef: {
          id: 1,
          screen_name: "yamadachef",
          display_name: "山田シェフ",
          description:
            "初の絵本出版！『まねっこシェフ』・ふわふわ！スクランブルエッグ・にぎにぎ！おにぎり主婦の友社より３月３日、２冊同時発売！絶賛発売中！",
          recipes_count: 0,
          follows_count: 0,
          is_following: false,
          chef_links: null,
        },
      },
      {
        id: 4,
        watch_id: "xxx4",
        title: "簡単副菜！タコときゅうりの酢の物",
        description:
          "あともう一品欲しいときに便利な、タコときゅうりの酢の物です。少ない調味料でシンプルな味つけですが、おかずにはもちろん、お酒のおつまみにもなる便利な副菜です。簡単に作ることができますので、ぜひ試してみてくださいね。",
        servings: 2,
        is_draft: false,
        published_status: "public",
        favorites_count: 2,
        chef: {
          id: 1,
          screen_name: "yamadachef",
          display_name: "山田シェフ",
          description:
            "初の絵本出版！『まねっこシェフ』・ふわふわ！スクランブルエッグ・にぎにぎ！おにぎり主婦の友社より３月３日、２冊同時発売！絶賛発売中！",
          recipes_count: 0,
          follows_count: 0,
          is_following: false,
          chef_links: null,
        },
      },
      {
        id: 3,
        watch_id: "xxx3",
        title: "居酒屋さんメニュー！キュウリの塩昆布和え",
        description:
          "居酒屋さんででてくるような、おつまみにぴったりなメニューのご紹介です。塩昆布がダシ代わりになるので、他の調味料は一切なしでお作りいただけますよ。お家にあるものでパパッと作れるレシピは、あと一品欲しいときなどの強い味方です！とっても簡単でお箸が止まらない味、ぜひお試しください！",
        servings: 4,
        is_draft: false,
        published_status: "public",
        favorites_count: 4,
        chef: {
          id: 1,
          screen_name: "yamadachef",
          display_name: "山田シェフ",
          description:
            "初の絵本出版！『まねっこシェフ』・ふわふわ！スクランブルエッグ・にぎにぎ！おにぎり主婦の友社より３月３日、２冊同時発売！絶賛発売中！",
          recipes_count: 0,
          follows_count: 0,
          is_following: false,
          chef_links: null,
        },
      },
      {
        id: 2,
        watch_id: "xxx2",
        title: "なすとオクラのさっぱり揚げ浸し",
        description:
          "夏野菜のナスとオクラの揚げ浸しのご紹介です。粘り気があるオクラと、ジューシーなナスに染み込んだ酸味のある出汁がさっぱりとしていておいしいですよ。暑い日には冷たく冷やしてお召し上がりくださいね。ぜひお試しください。",
        servings: 3,
        is_draft: false,
        published_status: "public",
        favorites_count: 4,
        chef: {
          id: 1,
          screen_name: "yamadachef",
          display_name: "山田シェフ",
          description:
            "初の絵本出版！『まねっこシェフ』・ふわふわ！スクランブルエッグ・にぎにぎ！おにぎり主婦の友社より３月３日、２冊同時発売！絶賛発売中！",
          recipes_count: 0,
          follows_count: 0,
          is_following: false,
          chef_links: null,
        },
      },
    ],
    page_info: {
      length: 10,
      has_next_page: true,
      has_previous_page: false,
      start_cursor: "30",
      end_cursor: "2",
    },
  },
}
