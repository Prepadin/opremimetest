import { auth } from '@clerk/nextjs/server'

import { db } from './db'

const DAY_IN_MS = 86_400_000

export const checkSubscription = async () => {
  const { userId } = auth()

  if (!userId) return false

  const userSubscription = await db.userSubscription.findUnique({
    where: {
      userId,
    },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    },
  })

  if (!userSubscription) return false

  const isSubscribed =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now()

  return !!isSubscribed
}

export const increaseSubscription = async () => {
  const { userId } = auth()

  if (!userId) return

  const userSubscription = await db.userSubscription.findUnique({
    where: {
      userId,
    },
  })

  if (userSubscription) {
    await db.userSubscription.update({
      where: {
        userId,
      },
      data: {
        count: userSubscription.count + 1,
      },
    })
  } else {
    await db.userSubscription.create({
      data: { userId, count: 1 },
    })
  }
}

export const checkApiSubscription = async () => {
  const { userId } = auth()

  if (!userId) return false

  const userSubscription = await db.userSubscription.findUnique({
    where: {
      userId,
    },
  })

  const MAX_FREE_COUNTS = 300 as const
  return !userSubscription || userSubscription.count < MAX_FREE_COUNTS
}

export const getSubscriptionCount = async () => {
  const { userId } = auth()

  if (!userId) return 0

  const userSubscription = await db.userSubscription.findUnique({
    where: {
      userId,
    },
  })

  if (!userSubscription) return 0

  return userSubscription.count
}
