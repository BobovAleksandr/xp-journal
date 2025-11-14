import { TUser } from "@/entities/user/types";

export const userHoleinthehead: TUser = {
  id: 1,
  name: 'holeinthehead',
  email: "holeinthehead@bk.ru",
  games: [
    {
      id: 1942,
      slug: 'the-witcher-3-wild-hunt',
      status: 'completed',
      rating: 5.0
    },
    {
      id: 1877,
      slug: 'cyberpunk-2077',
      status: 'platinum',
      rating: 4.8
    },
    {
      id: 472,
      slug: 'the-elder-scrolls-v-skyrim',
      status: 'completed',
      rating: 4.9
    },
    {
      id: 1020,
      slug: 'grand-theft-auto-v',
      status: 'inProgress',
      rating: 4.6
    },
    {
      id: 25076,
      slug: 'red-dead-redemption-2',
      status: 'completed',
      rating: 5.0
    },
    {
      id: 26192,
      slug: 'the-last-of-us-part-ii',
      status: 'platinum',
      rating: 4.7
    },
    {
      id: 119133,
      slug: 'elden-ring',
      status: 'inProgress',
      rating: 4.9
    },
    {
      id: 7334,
      slug: 'bloodborne',
      status: 'notCompleted',
      rating: 3.2
    },
    {
      id: 11133,
      slug: 'dark-souls-iii',
      status: 'completed',
      rating: 4.5
    },
    {
      id: 11156,
      slug: 'horizon-zero-dawn',
      status: 'inProgress',
      rating: 4.3
    },
    {
      id: 9630,
      slug: 'fallout-4',
      status: 'completed',
      rating: 4.1
    },
    {
      id: 76882,
      slug: 'sekiro-shadows-die-twice',
      status: 'toPlay',
      rating: 0.0
    }
  ]
}
